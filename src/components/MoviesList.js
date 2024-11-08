import MoviesCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-6 py-1 md:py-3">
      <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MoviesCard path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
