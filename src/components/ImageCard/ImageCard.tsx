import css from './ImageCard.module.css';
import GridItem from '../GridItem/GridItem';
import { FC } from 'react';

type ImageCardProps = {
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  openModal: (src: string, alt: string) => void;
};

const ImageCard: FC<ImageCardProps> = ({
  alt_description,
  urls,
  openModal,
}) => {
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
