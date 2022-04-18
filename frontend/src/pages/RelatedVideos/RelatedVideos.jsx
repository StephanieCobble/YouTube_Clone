import axios from "axios";
import { useState } from "react";
import { Route } from "react-router-dom";
import VideoPage from "../VideoPage/VideoPage";
import { Link } from "react-router-dom";

const RelatedVideos = (props) => {
    const [relatedVideos, setRelatedVideos] = useState([])
    
    // useEffect(() => {
    //     relatedVid()
    //     console.log(useEffect)
    // }, [])
    


    async function relatedVid() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI&maxResults=10`);
        setRelatedVideos(response.data.items)
    
    }

    function relatedResults() {
        relatedVideos.map((videos, index) => {
            <Link key={index} to={`/videopage/${videos.videoId}`}></Link>
            return [videos.videoId]
        }
        )
    }
    return ( 
        <div>
            <relatedResults />
        </div>
     );
}
 
export default RelatedVideos;



