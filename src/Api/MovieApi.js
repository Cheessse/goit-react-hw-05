import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWUwNjlkZjc2NzA2MjVmMDNhNDlhODE5Y2JiOTdlYiIsInN1YiI6IjY2MWFjNGRhOTc2YTIzMDE3YjI5YzMzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pe-yXxBTeQwk6vqqq0-7ImwKjcyrpCtc1anfYnj7NiM";

export const fetchTrendingMovies = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    options
  );

  return response.data.results;
};

export const fetchSearchMovie = async (query) => {
  const options = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",

    options
  );

  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,

    options
  );

  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,

    options
  );

  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,

    options
  );

  return response.data.results;
};
