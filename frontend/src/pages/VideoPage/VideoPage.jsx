import react from "react";
import SearchPage from "../SearchPage/SearchPage";
import RelatedVideos from "../RelatedVideos/RelatedVideos";



const VideoPage = (props) => {
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${props.videoId}`}
      frameBorder="0"
      target="_parent"
    ></iframe>
  );
  // <div>
  //   <RelatedVideos/>
  // </div>
};

export default VideoPage;


// src=`https://www.youtube.com/embed/${SearchPage}`
// "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=UCf89VTPA8o&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI"