import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  // const PF = "https://blogcup.herokuapp.com/images/"
  
  const createMarkup = () => {
    return { __html: post.desc.slice(0, 110)+"..." };
  }

  return (
    <div className="post">
      <div className="imageBox">
        {post.photo && (
          <Link to={`/post/${post._id}`} className="link">
            <img className="postImg" src={post?.photo} alt="post" />
          </Link>
        )}
      </div>
      <div className="postInfo">
        <div className="postCats">
          {post?.categories?.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title.slice(0, 35)+"..."}</span>
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <Link to={`/post/${post._id}`} className="link">
        <p className="postDesc" dangerouslySetInnerHTML={createMarkup()}></p>
      </Link>
    </div>
  );
};
