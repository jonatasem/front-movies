import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../api/moviesApi';
import { setMovies, likeMovie, selectMovie } from '../features/moviesSlice';
import ImgLogo from '../assets/img/list-logo.jpeg';
import '../sass/MovieList.scss';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.allMovies);
    const baseUrl = "https://api-movies-tt99.onrender.com"; // URL base do servidor
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const getMovies = async () => {
            const moviesData = await fetchMovies();
            dispatch(setMovies(moviesData));
        };
        getMovies();
    }, [dispatch]);

    const handleLike = (id) => {
        dispatch(likeMovie(id));
        setNotification('Filme curtido com sucesso!');
        setTimeout(() => setNotification(''), 3000); // Limpa a notificação após 3 segundos
    };

    const handleSelect = (movie) => {
        const movieWithBaseUrl = {
            ...movie,
            img: `${baseUrl}/${movie.img}`,
        };
        dispatch(selectMovie(movieWithBaseUrl));
    };

    return (
        <section className='container-list'>
            <article className='list-header'>
                <img src={ImgLogo} alt="Logo do Site" />
            </article>
            {notification && <div className="notification">{notification}</div>}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                           <img onClick={() => handleSelect(movie)} src={`${baseUrl}/${movie.img}`} alt={movie.title} />
                        <button onClick={() => handleLike(movie.id)} className='btn-like'>Curtir</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MovieList;