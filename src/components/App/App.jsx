import { useState, useEffect } from 'react';
import { fetchImages } from '../../unsplash-api';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import css from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await fetchImages(query, page);

        if (!results.length) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImages => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSearch = topic => {
    setQuery(topic);
    setPage(1);
    setImages([]);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (src, alt) => {
    setIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalSrc(null);
    setModalAlt('');
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {!error && !isEmpty && !images.length && (
        <p className={css.textStart}>Let`s begin search!</p>
      )}

      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {isVisible && (
        <LoadMoreBtn
          onClick={handleLoadMoreClick}
          disabled={isLoading}
        ></LoadMoreBtn>
      )}

      {isEmpty && (
        <p className={css.text}>Sorry, nothing was found for your query!</p>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </>
  );
};

export default App;
