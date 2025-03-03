import React from 'react';
   import MovieList from './components/MovieList';
   import MovieDetails from './components/MovieDetails';
   import LikedMovies from './components/LikedMovies';

   const App = () => {
       return (
           <div>
               <MovieList />
               <MovieDetails />
               <LikedMovies />
           </div>
       );
   };

   export default App;