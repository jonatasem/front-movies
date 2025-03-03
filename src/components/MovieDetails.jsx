import React, { useEffect } from 'react';
   import { useDispatch, useSelector } from 'react-redux';
   import { clearSelectedMovie } from '../features/moviesSlice';
   import { fetchMovieDetails } from '../api/moviesApi';

   const MovieDetails = () => {
       const dispatch = useDispatch();
       const selectedMovie = useSelector((state) => state.movies.selectedMovie);

       useEffect(() => {
           if (selectedMovie) {
               const getMovieDetails = async () => {
                   const details = await fetchMovieDetails(selectedMovie.id);
                   // Aqui você pode atualizar o estado ou fazer algo com os detalhes
               };
               getMovieDetails();
           }
       }, [selectedMovie]);

       if (!selectedMovie) return null;

       return (
           <div>
               <h2>{selectedMovie.title}</h2>
               <p>{selectedMovie.description}</p>
               <video controls>
                   <source src={selectedMovie.videoUrl} type="video/mp4" />
                   Seu navegador não suporta a tag de vídeo.
               </video>
               <button onClick={() => dispatch(clearSelectedMovie())}>Voltar</button>
           </div>
       );
   };

   export default MovieDetails;