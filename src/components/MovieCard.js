const MoviesCard = ({ path }) => {
  return (
    <div className="w-52 pr-4">
      <img src={"https://image.tmdb.org/t/p/w500/" + path} alt="movie_card" />
    </div>
  );
};

export default MoviesCard;
