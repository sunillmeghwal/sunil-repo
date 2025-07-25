import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "../store/WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);

  const handleGetPostsClick = () => {
    console.log("get post clicks");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
