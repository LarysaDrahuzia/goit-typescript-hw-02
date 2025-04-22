import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from 'react';

Modal.setAppElement('#root');

type ImageModalProps = {
  src: string | null;
  alt: string;
  modalIsOpen: boolean;
  closeModal: () => void;
};

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Example Modal"
    >
      {src && <img className={css.img} src={src} alt={alt} />}
      <p className={css.text}>{alt}</p>
    </Modal>
  );
};

export default ImageModal;
