import axios from "axios";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import VideoPage from "../VideoPage/VideoPage";
import { Link, useParams } from "react-router-dom";

const RelatedVideos = (props) => {
    const { videos } = useParams();

    const [relatedVideos, setRelatedVideos] = useState([])
    
    useEffect(() => {
        relatedVid()
        console.log(useEffect)
    }, [])
    


    async function relatedVid(props) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI&maxResults=10&part=snippet`);
        setRelatedVideos(response.data.items)
        debugger;
    }

    // function relatedResults() {
    //     relatedVideos.map((videos, index) => {
    //         <Link key={index} to={`/videopage/${videos.videoId}`}></Link>
    //         return [videos.videoId]
    //     }
    //     )
    // }
    return ( 
        <div>
            {relatedVideos.map((videos, index) => { 
                <Link key={index} to={`/videopage/${videos.id.videoId}`}>
                    <p>{videos.id.videoId}</p>
                    <img 
                    src={`https://i.ytimg.com/vi/${videos.id.videoId}/0.jpg`}
                    ></img> (" ")
                </Link>
            })}
            {/* <relatedResults /> */}
        </div>
     );
}
 
export default RelatedVideos;



