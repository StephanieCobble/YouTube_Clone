// General Imports
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CommentForm from "./pages/CommentForm/CommentForm";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [userEntry, setUserEntry] = useState('castles')
  const [videoId, setVideoId] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDesc, setVideoDesc] = useState('')
  const { video } = useParams();
useEffect(() => {
    searchVideo()
    console.log(useEffect)
}, [])


async function searchVideo() {

    try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userEntry}&type=video&key=AIzaSyDasbaAHFIT6SMPUR2wH4w9vt-nWJgh9no&part=snippet`);
        //setQuery(response.data.items)
        setVideoId(response.data.items[0].id.videoId)
        setVideoTitle(response.data.items[0].snippet.title)
        setVideoDesc(response.data.items[0].snippet.description)
        console.log(response.data.items)
        debugger;
    } catch (error) {
        console.log("Try again!")
    }
}


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/comment" element={<PrivateRoute><CommentForm /></PrivateRoute>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/videopage/:video" element={<VideoPage videoId ={videoId} videoTitle={videoTitle} videoDesc={videoDesc}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//steph api key: key=AIzaSyAuqNDY-4LJQObGQHrx_4LBicAlbSuucDI
// codi api key : key=AIzaSyBTPi_bFaIRjEMsCka9fEpNF3EkNJMHUlg