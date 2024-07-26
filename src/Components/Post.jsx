import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../Store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  // const tags = Array.isArray(post.tags) ? post.tags : [];
  // This line ensures that tags is an array. If post.tags is not an array, it sets tags to an empty array.

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>

        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {/* <span className="badge text-bg-primary">{post.tags}</span>
                since tag is array so we will use map function */}

        {/* {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag " key={tag}>
            {tag}
          </span>
        ))} 
        //This line throw error 
         */}

{post.tags && Array.isArray(post.tags) && post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>{tag}</span>
        ))}

        {/* {tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))} */}

        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};
export default Post;
