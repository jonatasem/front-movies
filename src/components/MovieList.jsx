import React, { useEffect } from 'react';
   import { useDispatch, useSelector } from 'react-redux';
   import { fetchMovies } from '../api/moviesApi';
   import { setMovies, likeMovie, selectMovie } from '../features/moviesSlice';

   const MovieList = () => {
       const dispatch = useDispatch();
       const movies = useSelector((state) => state.movies.allMovies);

       useEffect(() => {
           const getMovies = async () => {
               const moviesData = await fetchMovies();
               dispatch(setMovies(moviesData));
           };
           getMovies();
       }, [dispatch]);

       const handleLike = (id) => {
           dispatch(likeMovie(id));
       };

       const handleSelect = (movie) => {
           dispatch(selectMovie(movie));
       };

       return (
           <div>
               <h1>Lista de Filmes</h1>
               <ul>
                   {movies.map((movie) => (
                       <li key={movie.id}>
                           <h3 onClick={() => handleSelect(movie)}>{movie.title}</h3>
                           <button onClick={() => handleLike(movie.id)}>Curtir</button>
                       </li>
                   ))}
               </ul>
           </div>
       );
   };

   export default MovieList;