import css from './ImageCard.module.css';
import GridItem from '../GridItem/GridItem';

const ImageCard = ({ id, src, alt }) => {
  return (
    <GridItem>
      <div className={css.thumb}>
        <img src={src.regular} alt={alt} />
      </div>
    </GridItem>
  );
};

export default ImageCard;
