import React from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './sass/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <section className='container-app'>
            <Header />
            <MovieList />
            <MovieDetails />
            <Footer />
        </section>
    );
};

export default App;
