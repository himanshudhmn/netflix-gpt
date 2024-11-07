import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearch = (props) => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="background-img" />
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearch;
