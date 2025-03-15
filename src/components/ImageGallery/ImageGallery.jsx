import ImageCard from '../ImageCard/ImageCard';
import Grid from '../Grid/Grid';

const ImageGallery = ({ images, openModal }) => {
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
