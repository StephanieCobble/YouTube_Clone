import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import "./LikeDislike.css";

const LikeDislike = (props) => {
  const [comments, setComments] = useState([])
  const [comment, singleComment] = useState('')
  const [likes, setLikes] = useState('')
  const [dislikes, setDislikes] = useState('')
  const [user, setUser] = useState('')
  const [likeSelected, setLikeSelected] = useState(false);
  const [dislikeSelected, setDislikeSelected] = useState(false);
  const [likeClass, setLikeClass] = useState("like-inactive");
  const [dislikeClass, setDislikeClass] = useState("dislike-inactive");

  const [ token] = useAuth();
  const navigate = useNavigate();
  GetComments()

  async function GetComments(){
  try {
    await axios.put(`http://127.0.0.1:8000/api/comments/update/${props.videoId}`, {
    headers: {
      Authorization: "Bearer " + token,
  },
});
navigate("/videopage")
} catch (error) {
console.log(error.message);
}
}


  comments.map((element, id) => {
  singleComment(element.text)
  setLikes(element.likes)
  setDislikes(element.dislikes)
  setUser(element.user)
  
});
 

  const handleLike = () => {
    if (likeSelected) {
      setLikeSelected(false);
    } else {
      setLikeSelected(true);
      setDislikeSelected(false);
    }
  };

  const handleDislike = () => {
    if (dislikeSelected) {
      setDislikeSelected(false);
    } else {
      setDislikeSelected(true);
      setLikeSelected(false);
    }
  };

  useEffect(() => {
    if (likeSelected === true) {
      setLikeClass("like-active");
    } else if (likeSelected === false) {
      setLikeClass("like-inactive");
    }
  }, [likeSelected]);

  useEffect(() => {
    if (dislikeSelected === true) {
      setDislikeClass("dislike-active");
    } else if (dislikeSelected === false) {
      setDislikeClass("dislike-inactive");
    }
  }, [dislikeSelected]);


  library.add(faThumbsUp, faThumbsDown);

    return (
      <div className='rating'>
        <div>
        <table>
      <h2>Username:{user}</h2>
      <div>
        <p>
        Comment:{comment}
        </p>
        <div>Like{likes}
        <button className={likeClass} onClick={handleLike}>
        <FontAwesomeIcon
            color="#525753"
            icon={["fa-solid", "fa-thumbs-up"]}
          />
        </button>
        </div>
        <div> Dislike{dislikes}
        <button className={dislikeClass} onClick={handleDislike}>
        <FontAwesomeIcon
            color="#525753"
            icon={["fa-solid", "fa-thumbs-down"]}
          />
        </button>
        </div>
      </div>  
        </table>



        </div>
      </div>
        
      );
}
 
export default LikeDislike;