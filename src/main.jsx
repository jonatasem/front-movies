import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './styles/Main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LikedMovies from './components/LikedMovies'; // Certifique-se de que o caminho está correto
import MovieList from './components/MovieList'; // Adicionando MovieList para a rota

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/liked" element={<LikedMovies />} />
                <Route path="/movies" element={<MovieList />} /> 
            </Routes>
        </BrowserRouter>
    </Provider>
);