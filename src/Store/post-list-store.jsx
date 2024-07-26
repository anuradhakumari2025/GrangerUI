import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DefaultPostList
  );

  const deletePost = (postId) => {
    // console.log(`post is deleted for ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addPost = (
    postUserId,
    postTitle,
    postBody,
    postReactions,
    postTags
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: postUserId,
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        tags: postTags,
      },
    });
  };

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

const DefaultPostList = [
  {
    id: "1",
    title: "Mumbai",
    reactions: "500",
    userId: "user1",
    body: "I am going to Mumbai for study and enjoy,Peace Out",
    tags: ["Study", "Trek", "Enjoy"],
  },
  {
    id: "2",
    title: "Graduated",
    reactions: "1000",
    userId: "user2",
    body: "Bhai BTECH ki degree mil gai,Hard to Believe ",
    tags: ["Degree", "Job", "Life Settle"],
  },
];

export default PostListProvider;
