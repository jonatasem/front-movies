import { createSlice } from '@reduxjs/toolkit';

   const moviesSlice = createSlice({
       name: 'movies',
       initialState: {
           allMovies: [],
           likedMovies: [],
           selectedMovie: null,
       },
       reducers: {
           setMovies: (state, action) => {
               state.allMovies = action.payload;
           },
           likeMovie: (state, action) => {
               const movie = state.allMovies.find(movie => movie.id === action.payload);
               if (movie && !state.likedMovies.includes(movie)) {
                   state.likedMovies.push(movie);
               }
           },
           selectMovie: (state, action) => {
               state.selectedMovie = action.payload;
           },
           clearSelectedMovie: (state) => {
               state.selectedMovie = null;
           },
       },
   });

   export const { setMovies, likeMovie, selectMovie, clearSelectedMovie } = moviesSlice.actions;
   export default moviesSlice.reducer;