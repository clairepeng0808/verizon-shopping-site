import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from './Icon';
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Transition } from 'react-transition-group';

const ImageSlider: React.FC<{ images: Array<string> }> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const length = images.length;
  const isLastImage = currentImage === length - 1;
  const isFirtImage = currentImage === 0;

  const clickNext = () => {
    setCurrentImage(isLastImage ? 0 : currentImage + 1);
  };

  const clickPrevious = () => {
    setCurrentImage(isFirtImage ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(images) || length === 0) return null;
  return (
    <SliderWrapper
      onMouseOver={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <LeftArrow
        icon={faChevronCircleLeft}
        onClick={clickPrevious}
        active={showArrow}
      />
      <RightArrow
        icon={faChevronCircleRight}
        size="lg"
        onClick={clickNext}
        active={showArrow}
      />
      {images.map((image, index) => {
        return (
          <>
            <Transition
              in={index === currentImage}
              timeout={300}
              appear
              unmountOnExit
            >
              {(transitionState) => (
                <Image
                  transitionState={transitionState}
                  key={`image-${index}`}
                  src={image}
                  alt="product"
                />
              )}
            </Transition>
          </>
        );
      })}
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 150px;
  transition: 0.5s ease;
  z-index: 20;
  overflow: hidden;
`;

const Image = styled.img<{ transitionState: TransitionStatetType }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: all 600ms;
`;

const RightArrow = styled(ArrowIcon)<{ active: boolean }>`
  right: 12px;
  font-size: 24px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const LeftArrow = styled(ArrowIcon)<{ active: boolean }>`
  left: 12px;
  font-size: 24px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export default React.memo(ImageSlider);
