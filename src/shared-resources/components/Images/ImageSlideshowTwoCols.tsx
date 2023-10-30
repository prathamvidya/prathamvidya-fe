import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface SlideshowProps {
  imagesLeft: string[];
  imagesRight: string[];
  animateRight?: boolean;
  animateLeft?: boolean;
  ambientMode?: boolean;
  ambienceClassName?: string;
  grayscale?: boolean;
  aspectRatioClassnameRight?: string; // Send h-full for no aspect-ratio
  aspectRatioClassnameLeft?: string; // Send h-full for no aspect-ratio
  imageProps?: any;
  fallbackImage?: any;
}

const ImageSlideshowTwoCols: React.FunctionComponent<SlideshowProps> = (
  props
) => {
  const {
    imagesRight,
    imagesLeft,
    ambientMode,
    ambienceClassName,
    grayscale,
    aspectRatioClassnameRight,
    aspectRatioClassnameLeft,
    animateRight,
    animateLeft,
    imageProps,
    fallbackImage,
  } = props;
  const [currentImageRight, setCurrentImageRight] = useState<number>(0);
  const [currentImageLeft, setCurrentImageLeft] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);
  useEffect(() => {
    let id: NodeJS.Timeout;
    if (animateRight) {
      id = setTimeout(() => {
        setCurrentImageRight((v) => (v + 1) % imagesRight.length);
      }, 10000);
    }
    return () => {
      if (id) clearTimeout(id);
    };
  }, [currentImageRight, imagesRight, animateRight]);

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (animateLeft) {
      id = setTimeout(() => {
        setCurrentImageLeft((v) => (v + 1) % imagesLeft.length);
      }, 10000);
    }
    return () => {
      if (id) clearTimeout(id);
    };
  }, [currentImageLeft, imagesLeft, animateLeft]);
  return (
    <div
      className={`w-full grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 `}
    >
      {/* Left */}
      <span
        className={`relative object-cover shadow-nft dark:shadow-nftDark rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg w-full overflow-hidden ${
          aspectRatioClassnameLeft || 'aspect-[2/1]'
        }`}
      >
        {ambientMode && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imagesLeft[currentImageLeft]}
            className={`w-full ${
              aspectRatioClassnameLeft || 'aspect-[2/1]'
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
            ambientMode ? 'absolute inset-0' : 'relative w-full h-full'
          } overflow-hidden `}
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={imagesLeft[currentImageLeft] || fallbackImage}
            className={`object-cover transition-all duration-700 overflow-hidden w-full ${
              aspectRatioClassnameLeft || 'aspect-[2/1]'
            } scale-110 ${
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
              animateLeft
                ? {
                    animation: 'scale 20s linear infinite',
                  }
                : undefined
            }
            {...imageProps}
          />
        </div>
      </span>

      {/* Right */}
      <span
        className={`relative object-cover w-full shadow-nft dark:shadow-nftDark rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg overflow-hidden ${
          aspectRatioClassnameRight || 'aspect-[2/1]'
        }`}
      >
        {ambientMode && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imagesRight[currentImageRight]}
            className={`w-full ${
              aspectRatioClassnameRight || 'aspect-[2/1]'
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
            ambientMode ? 'absolute inset-0' : 'relative w-full h-full'
          } overflow-hidden`}
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={imagesRight[currentImageRight] || fallbackImage}
            className={`object-cover transition-all duration-700 overflow-hidden w-full ${
              aspectRatioClassnameRight || 'aspect-[2/1]'
            } scale-110 ${
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
              animateRight
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

export default React.memo(ImageSlideshowTwoCols);
