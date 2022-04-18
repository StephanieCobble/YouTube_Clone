import axios from "axios"; 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react/cjs/react.production.min";

const SearchPage = () => {

const [query, setQuery] = useState([])
const [userEntry, setUserEntry] = useState('castles')
useEffect(() => {
    searchVideo()
    console.log(useEffect)
}, [])


async function searchVideo() {

    try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userEntry}&type=video&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI&part=snippet`);
        setQuery(response.data.items)
        console.log(response.data.items)
        debugger;
    } catch (error) {
        console.log("Try again!")
    }
}

function mapVideos(){console.log('mapVideos')
return query.map()}

return (
    <div>
        
    {/* {query.map((video, index) => {
    return(
    <p key={index}>{video.id.videoId}</p>
    )} */}
    </div>
);

    };
export default SearchPage; 