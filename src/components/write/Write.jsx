import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";
import { axiosInstance } from "../../config";

export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const { user } = useContext(Context);
  const headers = { token: `Bearer ${user?.accessToken}` };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      photo,
    };
    if (user?.accessToken) {
      try {
        const res = await axiosInstance.post("api/posts", newPost, {
          headers,
        });
        window.location.replace("/post/" + res.data._id);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        {photo && <img src={photo} className="writeImg" alt="" />}
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Image URL"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
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
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};
