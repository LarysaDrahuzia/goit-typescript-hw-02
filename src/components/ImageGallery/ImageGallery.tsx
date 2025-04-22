import ImageCard from '../ImageCard/ImageCard';
import Grid from '../Grid/Grid';
import { Image } from '../App/App.types';
import { FC } from 'react';

type ImageGalleryPrors = {
  images: Image[];
  openModal: (src: string, alt: string) => void;
};

const ImageGallery: FC<ImageGalleryPrors> = ({ images, openModal }) => {
  return (
    <Grid>
      {images.map(({ id, alt_description, urls }) => (
        <ImageCard
          key={id}
          urls={urls}
          alt_description={alt_description}
          openModal={openModal}
        />
      ))}
    </Grid>
  );
};

export default ImageGallery;
