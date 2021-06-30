import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from './Icon';
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const ImageSlider: React.FC<{ images: Array<string>; id: string }> = ({
  images,
}) => {
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
        active={showArrow.toString()}
      />
      <RightArrow
        icon={faChevronCircleRight}
        size="lg"
        onClick={clickNext}
        active={showArrow.toString()}
      />
      {images.map((image, index, id) => {
        return (
          <div key={`image-${id}-${index}`}>
            {index === currentImage && <Image src={image} alt="product" />}
          </div>
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
  z-index: 20;
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  user-select: none;
`;

const RightArrow = styled(ArrowIcon)<{ active: string }>`
  right: 12px;
  font-size: 24px;
  opacity: ${(props) => (props.active === 'true' ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const LeftArrow = styled(ArrowIcon)<{ active: string }>`
  left: 12px;
  font-size: 24px;
  opacity: ${(props) => (props.active === 'true' ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export default React.memo(ImageSlider);
