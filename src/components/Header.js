import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO, laguageSelector } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/appConfigSlice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const langPref = useSelector((store) => store.appConfig.langPreference);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      return () => unSubscribe();
    });
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          {showGPTSearch && (
            <select
              onChange={handleLangChange}
              className="py-2 px-4 rounded-lg my-2 bg-black border-solid border border-gray-500 text-white"
              value={langPref}
            >
              {laguageSelector.map((lang) => (
                <option key={lang.key} value={lang.key}>
                  {lang?.displayName}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-lg mx-4 my-2"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-10 h-10 " src={AVATAR} alt="user" />
          <button
            className="font-bold text-white px-4 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
