import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearch = (props) => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="background-img"
          className="h-screen object-cover md:h-fit"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
