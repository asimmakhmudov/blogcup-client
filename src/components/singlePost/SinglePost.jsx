import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState();
  const { user } = useContext(Context);
  // const PF = "https://blogcup.herokuapp.com/images/";
  const headers = { token: `Bearer ${user?.accessToken}` };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setPhoto(res.data.photo);
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
          photo,
        },
        { headers }
      );
      setUpdateMode(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const createMarkup = () => {
    return { __html: post?.desc };
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {updateMode ? (
          <input
            type="text"
            value={photo}
            className="singlePostTitleInput"
            autoFocus
            placeholder="Image URL"
            onChange={(e) => setPhoto(e.target.value)}
          />
        ) : (
          <div className="updateMode">
            {post?.photo && (
              <img className="singlePostImg" src={post?.photo} alt="postimg"/>
            )}
          </div>
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
            <button className="updateButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        ) : (
          <div className="singlePostTitleBox">
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
            <h1 className="singlePostTitle">{post?.title}</h1>
          </div>
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
          // <textarea
          //   rows="100"
          //   className="singlePostDescInput"
          //   value={desc}
          //   onChange={(e) => setDesc(e.target.value)}
          // />
          <CKEditor
            editor={ClassicEditor}
            data={desc}
            className="writeText"
            onReady={(editor) => {
              // console.log("Editor is ready to use!", editor);
            }}
            onChange={(e, editor) => {
              const data = editor.getData();
              setDesc(data);
            }}
            onBlur={(e, editor) => {
              // console.log("Blur.", editor);
            }}
            onFocus={(e, editor) => {
              // console.log("Focus.", editor);
            }}
          />
        ) : (
          <p className="singlePostDesc" dangerouslySetInnerHTML={createMarkup()}></p>
        )}
      </div>
    </div>
  );
};
