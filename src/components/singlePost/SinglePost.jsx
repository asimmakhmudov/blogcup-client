import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState();
  const { user } = useContext(Context);
  const PF = "https://limonblog.herokuapp.com/images/";
  const headers = { token: `Bearer ${user?.accessToken}` };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete("api/posts/" + path, { headers });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(
        "api/posts/" + path,
        {
          username: user.username,
          title,
          desc,
        },
        { headers }
      );
      setUpdateMode(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img className="singlePostImg" src={PF + post?.photo} alt="postimg" />
        )}
        {updateMode ? (
          <div className="updateMode">
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="updateButton" onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <h1 className="singlePostTitle">
            {post?.title}
            {user?.isAdmin && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post?.username}`} className="link">
              <b> {post?.username}</b>
            </Link>
          </span>
          {new Date(post?.createdAt).toDateString()}
        </div>
        {updateMode ? (
          <textarea
            rows="100"
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post?.desc}</p>
        )}
      </div>
    </div>
  );
};
