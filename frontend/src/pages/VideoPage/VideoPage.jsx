import react from "react";
import SearchPage from "../SearchPage/SearchPage";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import LikeDislike from "../LikeDislike/LikeDislike";
import { Link, renderMatches, useParams} from "react-router-dom";

const VideoPage = (props) => {
  const { relatedUrl, setRelatedUrls } = useState([""]);
  const { relatedVideoId, setRelatedVideoId } = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { video } = useParams();

  useEffect(() => {
    relatedVid();
  }, []);

  async function relatedVid() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=H-3rxh8kZHE&type=video&key=AIzaSyDasbaAHFIT6SMPUR2wH4w9vt-nWJgh9no&maxResults=5&part=snippet`
    );
    setRelatedVideos(response.data.items);
    debugger;
  }


function handleClick(element) {
  return (
  <iframe src={`https://www.youtube.com/embed/${props.videoId}`} ></iframe>
 
  )
}

  // relatedVideos.map(function(element) {
  //   let url = [element.snippet.thumbnails.high.url]
  //   let video_Id = [element.id.videoId]
  //   setRelatedUrls(url);
  //   setRelatedVideoId(video_Id);
  //   debugger;
  // })

  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${props.videoId}`}
        frameBorder="0"
        target="_parent"
      ></iframe>
      <h2>Title:{props.videoTitle}</h2>
      <h2>Description:{props.videoDesc}</h2>

      {relatedVideos.map((element, index) => {
        if (element.snippet) {
          return (
            <Link key={index} to={`/videopage/${element.id.videoId}`}>
              <a onClick={() => handleClick(element)}>
              {/* {window.location.reload()} */}
            <img
              src={element.snippet.thumbnails.high.url}
              />
              <h3>{element.snippet.title}</h3>
              <h4>{element.snippet.channelTitle}</h4>
              </a>
            </Link>
          );
        } else {
          return <p>No thumbnail:(</p>;
        }
      })}
      <CommentForm />
      
      {/* <LikeDislike/> */}

      <table>{/* <img src={relatedUrl[1]}/> */}</table>
    </div>
  );
};

export default VideoPage;

// src=`https://www.youtube.com/embed/${SearchPage}`
// "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=UCf89VTPA8o&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI"
