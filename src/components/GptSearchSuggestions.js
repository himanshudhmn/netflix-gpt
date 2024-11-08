import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSearchSuggestions = (props) => {
  const { gptMovies, names } = useSelector((store) => store.gpt);
  if (!names) return null;
  return (
    <div className=" bg-black p-4 m-7 md:m-4 bg-opacity-85">
      {names.map((movie, index) => (
        <MoviesList title={movie} movies={gptMovies[index]} key={movie} />
      ))}
    </div>
  );
};

export default GptSearchSuggestions;
