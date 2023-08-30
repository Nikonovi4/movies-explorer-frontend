export const checkShortMovie = (movie) => {
  return movie.duration < 40;
};

export const checkMovieName = (movie, request) => {
  return (
    movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
    movie.nameEN.toLowerCase().includes(request.toLowerCase())
  );
};

export const checkUserMovies = (movie, userInfo) => {
  return userInfo._id === movie.owner;
}
