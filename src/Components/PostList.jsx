import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../Store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && <WelcomeMsg onGetPost={handleGetPost} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
