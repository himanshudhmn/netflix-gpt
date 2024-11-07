import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = (props) => {
  const langPref = useSelector((store) => store.appConfig.langPreference);
  return (
    <div className="p-[10%] flex justify-center">
      <form className=" bg-black w-[80%] grid grid-cols-12  bg-opacity-80">
        <input
          type="text"
          placeholder={lang[langPref].gptPlaceholderText}
          className="px-4 py-3 m-4 text-white bg-black bg-opacity-60 rounded-lg border-solid border border-gray-500 col-span-10 outline-none"
        />
        <button className="bg-red-600 px-4 py-2 rounded-lg col-span-2 m-4 text-white">
          {lang[langPref].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
