const API_URL = 'https://api-movies-1-uede.onrender.com/api/movies';

   export const fetchMovies = async () => {
       try {
           const response = await fetch(API_URL);
           if (!response.ok) {
               throw new Error('Erro ao buscar filmes');
           }
           const data = await response.json();
           return data;
       } catch (error) {
           console.error(error);
           return [];
       }
   };

   export const fetchMovieDetails = async (id) => {
       try {
           const response = await fetch(`${API_URL}/${id}`);
           if (!response.ok) {
               throw new Error('Erro ao buscar detalhes do filme');
           }
           const data = await response.json();
           return data;
       } catch (error) {
           console.error(error);
           return null;
       }
   };