import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, onError, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!errored) {
      setImgSrc(fallbackSrc);
      setErrored(true);
    }
    onError?.(e);
  };

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={handleError}
      {...rest} // Only valid HTML attributes are passed here
    />
  );
};

export default ImageWithFallback;