import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedMovie } from '../features/moviesSlice';
import { fetchMovieDetails } from '../api/moviesApi';
import '../sass/MovieDetails.scss';
import Footer from './Footer';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (selectedMovie) {
            const getMovieDetails = async () => {
                setLoading(true);
                try {
                    const details = await fetchMovieDetails(selectedMovie.id);
                    // Aqui você pode fazer algo com os detalhes, se necessário
                } catch (error) {
                    console.error("Erro ao buscar detalhes do filme:", error);
                } finally {
                    setLoading(false);
                }
            };
            getMovieDetails();
        }
    }, [selectedMovie]);

    if (loading) return <div style={{ textAlign: 'center' }}>Carregando...</div>;
    if (!selectedMovie) return null;

    return (
        <section className='container-details'>
            <article className='details-left'>
                <h2>{selectedMovie.title}</h2>
                <img src={selectedMovie.img} alt={selectedMovie.title} />
            </article>
            <article className='details-right'>
                <video controls>
                    <source src={selectedMovie.src} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
                <p className='descript-details'>{selectedMovie.description}</p>
            </article>
            <button className='btn-voltar' onClick={() => dispatch(clearSelectedMovie())}>Voltar</button>
        </section>
    );
};

export default MovieDetails;