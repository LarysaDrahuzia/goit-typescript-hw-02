import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, src, alt }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Example Modal"
    >
      <img className={css.img} src={src} alt={alt} />
      <p className={css.text}>{alt}</p>
    </Modal>
  );
};

export default ImageModal;
