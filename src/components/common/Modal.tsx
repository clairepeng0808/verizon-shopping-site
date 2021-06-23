import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import palette from '../styles/palette';
import Icon from '../common/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Transition } from 'react-transition-group';
import device from '../../utils/mediaUtil';

interface ModalProps {
  children?: any;
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, show, onClose }) => {
  const portalTarget = document.body;
  const modalRef = useRef(null);

  const html = document.querySelector<HTMLElement>('html');
  const body = document.querySelector<HTMLBodyElement>('body');

  // prevent body from scrolling when modal is shown
  useEffect(() => {
    if (html && body) {
      if (show) {
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
      } else {
        html.style.overflow = 'scroll';
        body.style.overflow = 'scroll';
      }
    }
  }, [show, html, body]);

  // click outside to close the modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(modalRef.current as any).contains(e.target)) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <Transition
      in={show}
      timeout={{ enter: 300, exit: 300 }}
      appear
      unmountOnExit
    >
      {(transitionState) => (
        <Backdrop onClick={handleBackdropClick}>
          <ModalWrapper ref={modalRef} transitionState={transitionState}>
            <ModalTitleWrapper>
              <ModalTitle>Wishlist</ModalTitle>
              <ModalCloseButton
                icon={faTimes}
                color={palette.darkGray}
                onClick={onClose}
              />
            </ModalTitleWrapper>
            <ModalBody>{children}</ModalBody>
          </ModalWrapper>
        </Backdrop>
      )}
    </Transition>,
    portalTarget
  );
};

const Backdrop = styled.div`
  background: #0000002e;
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div<{
  transitionState: TransitionStatetType;
  maxWidth?: string;
}>`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: ${(props) => props.maxWidth || '90%'};
  min-height: 300px;
  max-height: 80vh;
  background: ${palette.white};
  border-radius: 20px;
  border: 1px solid ${palette.gray};
  z-index: 100;
  padding: 20px 30px;
  box-shadow: 0px 0px 20px 4px rgb(0 0 0 / 10%);
  opacity: ${(props) => (props.transitionState === 'entered' ? 1 : 0)};
  transform: ${(props) =>
    props.transitionState === 'entered'
      ? `translate(-50%,0)`
      : `translate(-50%,200px)`};
  transition: all 500ms ease-in-out;
  ${device.sm} {
    padding: 10px 10px;
  }
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px;
  border-bottom: 1px solid ${palette.gray};
`;

const ModalCloseButton = styled(Icon)`
  cursor: pointer;
`;

const ModalTitle = styled.h4`
  font-size: 24px;
  margin: 0px;
  ${device.sm} {
    font-size: 18px;
  }
`;

const ModalBody = styled.div`
  padding: 5px 10px;
  max-height: 50vh;
  overflow-y: auto;
  ${device.sm} {
    padding: 5px;
    max-height: 60vh;
  }
`;

export default React.memo(Modal);
