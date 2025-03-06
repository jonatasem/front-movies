import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../sass/Header.scss';

export default function Header() {
    // Acessa o estado dos filmes curtidos
    const likedMovies = useSelector((state) => state.movies.likedMovies);

    return (
        <>
            <header className="container-header">
                <div className='header-logo'>
                    <h1>Looke</h1>
                    <p>Filmes e Séries à vontade</p>
                </div>
                <nav>
                    <ul>
                        <li className='btn-assine'>
                            <Link to="/liked" className='link-liked'>
                                <p>Favoritos</p>
                                {likedMovies.length > 0 ? `(${likedMovies.length})` : ''}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}