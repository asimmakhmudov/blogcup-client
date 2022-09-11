import "./posts.css";
import { Post } from "../post/Post";

export const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts?.map(post => (
        <Post post={post} key={post._id}/>
      ))}
    </div>
  )
}
