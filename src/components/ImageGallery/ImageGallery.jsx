import ImageCard from '../ImageCard/ImageCard';
import Grid from '../Grid/Grid';

const ImageGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(({ id, src, alt }) => (
        <ImageCard key={id} src={src} alt={alt} />
      ))}
    </Grid>
  );
};

export default ImageGallery;
