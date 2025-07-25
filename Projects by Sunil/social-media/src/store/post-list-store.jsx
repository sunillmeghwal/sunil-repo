import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  
  else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;

  }
   else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    // DEFAULT_POST_LIST
    []
  );

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    // console.log(`${userId} ${postTitle} ${postBody}${reactions} ${tags}`)
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    // console.log(`${userId} ${postTitle} ${postBody}${reactions} ${tags}`)
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    // console.log(`delete post called for:${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
         postList,
         addPost,
        addInitialPosts,
        deletePost
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi friends I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },

//   {
//     id: "2",
//     title: "Pass ho gya bhai",
//     body: "4 saal ki masti ke baad bh bhai ho gye h pass. Hard to believe.",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];
export default PostListProvider;
