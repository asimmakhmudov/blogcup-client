import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  const PF = "https://limonblog.blogcup.com/images/"
  return (
    <div className="post">
      {post.photo && (
        <Link to={`/post/${post._id}`} className="link">
          <img className="postImg" src={PF+post.photo} alt="post" />
        </Link>
      )}
      <div className="postInfo">
        <div className="postCats">
          {post?.categories?.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <Link to={`/post/${post._id}`} className="link">
        <p className="postDesc">{post.desc}</p>
      </Link>
    </div>
  );
};
