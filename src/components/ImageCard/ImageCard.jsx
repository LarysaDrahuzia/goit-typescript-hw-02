import css from './ImageCard.module.css';
import GridItem from '../GridItem/GridItem';

const ImageCard = ({ alt_description, urls, openModal }) => {
  return (
    <GridItem>
      <div className={css.thumb}>
        <img
          className={css.img}
          src={urls.small}
          alt={alt_description}
          onClick={() => openModal(urls.regular, alt_description)}
        />
        <p className={css.description}>{alt_description}</p>
      </div>
    </GridItem>
  );
};

export default ImageCard;
