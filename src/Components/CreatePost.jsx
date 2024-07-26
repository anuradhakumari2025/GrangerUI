import { useContext, useRef } from "react";
import { PostListData } from "../Store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostListData)
  const userIdElement = useRef();
  const postTitleElement= useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit =(event) => {
event.preventDefault();//to avoid submit of form by default
const postUserId = userIdElement.current.value;
const postTitle = postTitleElement.current.value;
const postBody = postBodyElement.current.value;
const postReactions = reactionsElement.current.value;
const postTags = tagsElement.current.value.split(" ");

//After clicking on post button all boxes should be blank so:-

userIdElement.current.value="";
postTitleElement.current.value="";
postBodyElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";

addPost(postUserId,postTitle,postBody,postReactions,postTags)
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
        ref={userIdElement}
          type="text"
          placeholder="Enter your user Id"
          className="form-control"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post
        </label>
        <input
        ref={postTitleElement}
          type="text"
          placeholder="How are you feeling today...."
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={5}
          ref={postBodyElement}
          type="text"
          placeholder="Tell me more about yourself"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of reactions
        </label>
        <input
        ref={reactionsElement}
          type="text"
          placeholder="How many people reated to this post"
          className="form-control"
          id="reaction"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
        ref={tagsElement}
          type="text"
          placeholder="Enter tags!!! using space"
          className="form-control"
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
