import react from "react";
import SearchPage from "../SearchPage/SearchPage";

const VideoPage = () => {
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src="https://www.googleapis.com/youtube/v3/search?q=UCf89VTPA8o&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI"
      frameBorder="0"
    ></iframe>
  );
};

export default VideoPage;
