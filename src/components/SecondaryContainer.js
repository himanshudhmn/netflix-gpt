import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = (props) => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;
  return (
    <div className=" bg-black">
      <div className="px-6 -mt-96 relative z-10">
        <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={movies?.popularMovies} />
        <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
