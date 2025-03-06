import { createSlice } from '@reduxjs/toolkit';

const getLikedMoviesFromLocalStorage = () => {
    const storedMovies = localStorage.getItem('likedMovies');
    return storedMovies ? JSON.parse(storedMovies) : [];
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        allMovies: [],
        likedMovies: getLikedMoviesFromLocalStorage(),
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
                localStorage.setItem('likedMovies', JSON.stringify(state.likedMovies)); // Persistir
            }
        },
        unLikeMovie: (state, action) => {
            const movieIndex = state.likedMovies.findIndex(movie => movie.id === action.payload);
            if (movieIndex !== -1) {
                state.likedMovies.splice(movieIndex, 1);
                localStorage.setItem('likedMovies', JSON.stringify(state.likedMovies)); // Persistir
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

export const { setMovies, likeMovie, unLikeMovie, selectMovie, clearSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;