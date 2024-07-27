import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    // DefaultPostList
    []
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

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  return (
    <PostListData.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

/* 
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
//Removing this default value because I want that it fetch data from dummy server
*/

export default PostListProvider;
