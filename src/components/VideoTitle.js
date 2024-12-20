const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video px-6 md:px-12 pt-[10%] md:pt-[15%] absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-xl md:text-6xl font-bold w-6/12 md:w-full">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3 ">
        {description}
      </p>
      <div className="flex flex-col md:flex-row text-sm md:text-lg">
        <button className="px-1 md:px-4 py-1 md:py-2  bg-white text-black rounded-md my-2 md:mr-2 w-2/12 md:w-1/12 font-normal md:font-bold hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block px-2 py-2 bg-gray-400 rounded-md w-2/12 md:w-1/12 my-2 md:mr-2 font-bold hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
