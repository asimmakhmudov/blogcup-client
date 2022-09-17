import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";
import { axiosInstance } from "../../config";
import axios from "axios";

export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const headers = { token: `Bearer ${user?.accessToken}` };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (user?.accessToken) {
      try {
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("https://limonblogapi.herokuapp.com/upload/", data, {headers});
          } catch (err) {}
        }
        try {
          const res = await axiosInstance.post("api/posts", newPost, {headers});
          window.location.replace("/post/" + res.data._id);
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} className="writeImg" alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            className="writeInput writeText"
            placeholder="Tell your story..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};
