// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
// import VideoPage from "../VideoPage/VideoPage";
// import { Link, useParams } from "react-router-dom";

// const RelatedVideos = (props) => {
//     const { videos } = useParams();
//     const {relatedUrl, setRelatedUrls} = useState([])
//     const {relatedVideoId, setRelatedVideoId} = useState([])
//     const [relatedVideos, setRelatedVideos] = useState([])
    
//     useEffect(() => {
//         relatedVid()
//         console.log(useEffect)
//     }, [])
    


//     async function relatedVid(props) {
//     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI&maxResults=5&part=snippet`);
//         setRelatedVideos(response.data.items)
//         debugger;
//     };
//     relatedVideos.forEach(element => {
//         let url = element.items.snippet.thumbnails.high.url
//         let video_Id = element.items.videoId
//        setRelatedUrls(url);
//        setRelatedVideoId(video_Id);

        
//     });

//     return ( 

//     );
// }
 
// export default RelatedVideos;



