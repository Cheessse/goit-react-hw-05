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
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      options,
    }
  );

  return response;
};

export const fetchSearchMovie = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      options,
    }
  );

  return response;
};

export const fetchMovieDetails = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/movie_id?language=en-US",
    {
      options,
    }
  );

  return response;
};

export const fetchMovieCredits = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US",
    {
      options,
    }
  );

  return response;
};

export const fetchMovieReviews = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1",
    {
      options,
    }
  );

  return response;
};
