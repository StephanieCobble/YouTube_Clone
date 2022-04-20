import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Comment = (props) => {
  const [comments, setComments] = useState([])
  const [comment, singleComment] = useState('')
  const [likes, setLikes] = useState('')
  const [dislikes, setDislikes] = useState('')
  const [user, setUser] = useState('')
  const [likeSelected, setLikeSelected] = useState(false);
  const [dislikeSelected, setDislikeSelected] = useState(false);
  const [likeClass, setLikeClass] = useState("like-inactive");
  const [dislikeClass, setDislikeClass] = useState("dislike-inactive");
  GetComments()

  async function GetComments(props){
  let response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.videoId}`)
  setComments(response.data)
};
  comments.map(function(element){
  singleComment(element.text)
  setLikes(element.likes)
  setDislikes(element.dislikes)
  setUser(element.user)
  console.log([])
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

    return (
      <div>
        <table>
      <h2>Username:{user}</h2>
      <body>
        <p>
        Comment:{comment}
        </p>
        <button className={likeClass} onClick={handleLike}>Like{likes}</button>
        <button className={dislikeClass} onClick={handleDislike}>Dislike{dislikes}</button>
      </body>  
        </table>




      </div>
        
      );
}
 
export default Comment;