import { useState, useEffect } from 'react';
import { fetchImages } from '../../unsplash-api';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.types';
import css from './App.module.css';

const App = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>('');

  useEffect(() => {
    if (!query) return;
    const getData = async (): Promise<void> => {
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

  const handleSearch = (topic: string): void => {
    setQuery(topic);
    setPage(1);
    setImages([]);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoadMoreClick = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (src: string, alt: string): void => {
    setIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
  };

  const closeModal = (): void => {
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
