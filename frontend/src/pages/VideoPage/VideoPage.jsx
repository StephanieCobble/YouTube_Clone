import react from "react";
import SearchPage from "../SearchPage/SearchPage";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";


const VideoPage = (props) => {
  
    const {relatedUrl, setRelatedUrls} = useState([''])
    const {relatedVideoId, setRelatedVideoId} = useState([])
    const [relatedVideos, setRelatedVideos] = useState([])
    
    useEffect(() => {
        relatedVid()
        console.log(useEffect)
    }, [])
    
    async function relatedVid(props) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI&maxResults=5&part=snippet`);
        setRelatedVideos(response.data.items)
        debugger;
    };
    relatedVideos.map(element => {
      let url = [element.items.snippet.thumbnails.high.url]
      let video_Id = [element.items.videoId]
      setRelatedUrls(url);
      setRelatedVideoId(video_Id);
      debugger;
    });

    // relatedUrl.map(function(url,index)){
    //   let 
    // }
  return (
    <div>
      <body>
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
     
        <CommentForm/>
      
      </body>
    <form>
      <table>
        <button>
          
        {/* <img rel='thumbnail' src={relatedUrl[0]}/>
        {relatedUrl.map((url) => <img src={url} />
        )};  */}
        </button>  
      
        </table>  
      </form>
   
    </div>   
   
  );
 
};

export default VideoPage;


// src=`https://www.youtube.com/embed/${SearchPage}`
// "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=UCf89VTPA8o&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI"