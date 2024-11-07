const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video px-12 pt-[10%] absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3 ">{description}</p>
      <div>
        <button className="px-4 py-2 bg-white text-black rounded-md mr-2 w-1/12 font-bold hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="px-3 py-2 bg-gray-400 rounded-md w-1/12 font-bold hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
