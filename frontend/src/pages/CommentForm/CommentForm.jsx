import React from "react";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

let initialValues = {
    id: "",
    user: "",
    video_id: "",
    text: "",
    likes: "",
    dislikes: ""
}

const CommentForm = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, addNewComment)
    async function addNewComment() {
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/`, formData, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    
    return ( 
        <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            ID:{" "}
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
            />
          </label>
          <label>
            User:{" "}
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Video:{" "}
            <input
              type="text"
              name="video_id"
              value={formData.video_id}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Text:{" "}
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Likes:{" "}
            <input
              type="text"
              name="likes"
              value={formData.likes}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Dislikes:{" "}
            <input
              type="text"
              name="dislikes"
              value={formData.dislikes}
              onChange={handleInputChange}
            />
          </label>
          <p style={{ fontSize: "12px" }}>
            Add New Comment!
          </p>
          <button>Submit!</button>
        </form>
      </div>
    );
}
 
export default CommentForm;



