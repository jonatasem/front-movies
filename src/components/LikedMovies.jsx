import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unLikeMovie } from '../features/moviesSlice';
import '../sass/LikedMovies.scss';
import { Link } from 'react-router-dom';

const LikedMovies = () => {
    const dispatch = useDispatch();
    const likedMovies = useSelector((state) => state.movies.likedMovies);
    const [notification, setNotification] = useState('');

    const handleUnLike = (id) => {
        dispatch(unLikeMovie(id));
        setNotification('Filme descurtido com sucesso!');
        setTimeout(() => setNotification(''), 3000); // Limpa a notificação após 3 segundos
    };

    return (
        <section className='container-liked'>
            <li className='header-liked'>
                <h1>Filmes Curtidos</h1>
                <Link to="/" className='btn-liked-home'>Início</Link>
            </li>
            {notification && <div className="notification">{notification}</div>}
            {likedMovies.length === 0 ? (
                <div className="no-liked-movies">Você ainda não curtiu nenhum filme :/</div>
            ) : (
                <ul>
                    {likedMovies.map((movie) => (
                        <li key={movie.id}>
                            <p>{movie.title}</p>
                            <button onClick={() => handleUnLike(movie.id)} className='btn-dlike'>Descurtir</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default LikedMovies;