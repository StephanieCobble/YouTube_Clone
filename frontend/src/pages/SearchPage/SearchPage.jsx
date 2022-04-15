import axios from "axios"; 
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";

const SearchPage = () => {

const {query, setQuery} = useState('')

async function searchVideo() {
    try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=UCf89VTPA8o&key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI`);
        setQuery(response.data)
        console.log(response.data)
    } catch (error) {
        console.log("Try again!")
    }
}

return (
    console.log(searchVideo)
);

};
export default SearchPage; 