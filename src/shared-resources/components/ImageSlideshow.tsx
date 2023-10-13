import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface SlideshowProps {
  images: string[];
  ambientMode?: boolean;
  ambienceClassName?: string;
  grayscale?: boolean;
  aspectRatioClassname?: string; // Send h-full for no aspect-ratio
  animate?: boolean;
  imageProps?: any;
  fallbackImage?: any;
}

const ImageSlideshow: React.FunctionComponent<SlideshowProps> = (props) => {
  const {
    images,
    ambientMode,
    ambienceClassName,
    grayscale,
    aspectRatioClassname,
    animate,
    imageProps,
    fallbackImage,
  } = props;
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);
  useEffect(() => {
    let id: NodeJS.Timeout;
    if (animate) {
      id = setTimeout(() => {
        setCurrentImage((v) => (v + 1) % images.length);
      }, 10000);
    }
    return () => {
      if (id) clearTimeout(id);
    };
  }, [currentImage, images, animate]);
  return (
    <div className={`w-full ${aspectRatioClassname || 'aspect-[2/1]'}`}>
      <span
        className={`relative object-cover w-full overflow-hidden ${
          aspectRatioClassname || 'aspect-[2/1]'
        }`}
      >
        {ambientMode && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[currentImage]}
            className={`w-full ${
              aspectRatioClassname || 'aspect-[2/1]'
            } transition-all duration-500 object-cover ${
              ambienceClassName || 'opacity-75 blur-xl'
            } ${
              // eslint-disable-next-line no-nested-ternary
              hovering ? 'grayscale-0' : grayscale ? 'grayscale' : ''
            }`}
            alt=''
          />
        )}
        <div
          className={`${
            ambientMode ? 'absolute inset-0' : ''
          } overflow-hidden rounded-lg`}
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={images[currentImage] || fallbackImage}
            className={`object-cover transition-all duration-700 overflow-hidden w-full ${
              aspectRatioClassname || 'aspect-[2/1]'
            } rounded-lg shadow-lg scale-110 ${
              // eslint-disable-next-line no-nested-ternary
              hovering ? 'grayscale-0' : grayscale ? 'grayscale' : ''
            }`}
            layout='fill'
            alt=''
            onError={(e) => {
              if (fallbackImage) {
                e.currentTarget.src = fallbackImage;
                e.currentTarget.onerror = null;
              }
            }}
            style={
              animate
                ? {
                    animation: 'scale 20s linear infinite',
                  }
                : undefined
            }
            {...imageProps}
          />
        </div>
      </span>
    </div>
  );
};

export default React.memo(ImageSlideshow);
