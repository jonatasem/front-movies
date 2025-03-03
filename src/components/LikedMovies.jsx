import React from 'react';
   import { useSelector } from 'react-redux';

   const LikedMovies = () => {
       const likedMovies = useSelector((state) => state.movies.likedMovies);

       return (
           <div>
               <h1>Filmes Curtidos</h1>
               <ul>
                   {likedMovies.map((movie) => (
                       <li key={movie.id}>{movie.title}</li>
                   ))}
               </ul>
           </div>
       );
   };

   export default LikedMovies;