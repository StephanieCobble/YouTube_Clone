import react from "react";
import SearchPage from "../SearchPage/SearchPage";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import { renderMatches } from "react-router-dom";


const VideoPage = (props) => {
  
    const {relatedUrl, setRelatedUrls} = useState([''])
    const {relatedVideoId, setRelatedVideoId} = useState([])
    const [relatedVideos, setRelatedVideos] = useState([])
    
    useEffect(() => {
        relatedVid()
        console.log(useEffect)
    }, [])
    
    async function relatedVid() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI&maxResults=5&part=snippet`);
        setRelatedVideos(response.data.items)
        debugger;
    };
    
    
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
      
      {relatedVideos.map((element)=>{
        if(element.snippet){
          return <img src = {element.snippet.thumbnails.high.url}/>
        }else{
          return(
            <p>No thumbnail:(</p>
          )
        }
      })}
      <CommentForm />
      {/* <Comment/> */}
      
      
      <table>
        {/* <img src={relatedUrl[1]}/> */}
      </table>  
   
    </div>   
   
  );
 
};

export default VideoPage;


// src=`https://www.youtube.com/embed/${SearchPage}`
// "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=UCf89VTPA8o&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI"