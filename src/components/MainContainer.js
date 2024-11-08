import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  return (
    <div className="bg-black pt-[20%]  md:pt-0">
      <VideoTitle
        title={mainMovie.original_title}
        description={mainMovie.overview}
      />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
