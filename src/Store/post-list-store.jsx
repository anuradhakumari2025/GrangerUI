import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => { },
});


const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

const addPost = () => {};
const deletePost = (postId) => {
  console.log(`post is deleted for ${postId}`);

};

const DefaultPostList = [
  {
    id: "1",
    title: "Mumbai",
    reactions: "500",
    userId: "user1",
    body: "I am going to Mumbai for study and enjoy,Peace Out",
    tags: ["trek", "study"],
  },
  {
    id: "2",
    title: "Graduated",
    reactions: "1000",
    userId: "user2",
    body: "Bhai BTECH ki degree mil gai,Hard to Believe ",
    tags: ["trek", "study"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DefaultPostList
  );

  return (
    <PostListData.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;

