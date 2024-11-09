import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { client } from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchMovies } from "../utils/gptSlice";

const GptSearchBar = (props) => {
  const langPref = useSelector((store) => store.appConfig.langPreference);
  const searchValue = useRef(null);
  const dispatch = useDispatch();

  const getMovieDetails = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };
  const handleSearch = async () => {
    const query =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchValue.current.value +
      ". Only give me 5 movies, comma separated like the example result given. Eg : Gadar, Sholay, Don, Aashiqui, My name is Khan ";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults?.choices[0]?.message?.content.split(", ");

    const moviesPromise = gptMovies.map((movie) => getMovieDetails(movie));

    const resultsPromise = await Promise.all(moviesPromise);
    dispatch(
      addGptSearchMovies({
        movieResults: resultsPromise,
        movieNames: gptMovies,
      })
    );
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className=" bg-black w-[90%] md:w-[80%] grid grid-cols-12  bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchValue}
          type="text"
          placeholder={lang[langPref].gptPlaceholderText}
          className="px-4 py-3 m-4 text-white bg-black bg-opacity-60 rounded-lg border-solid border border-gray-500 col-span-8 md:col-span-10 outline-none"
        />
        <button
          className="bg-red-600 px-4 py-2 rounded-lg col-span-4 md:col-span-2 m-4 text-white"
          onClick={handleSearch}
        >
          {lang[langPref].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
