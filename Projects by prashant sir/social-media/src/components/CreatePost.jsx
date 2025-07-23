import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
 const {addPost}= useContext(PostList);


  const userIdElement= useRef();
    const postTitleElement= useRef();
      const postBodyElement= useRef();
        const reactionsElement= useRef();
          const tagsElement= useRef();

          const handleSubmit=(event)=>{
            event.preventDefault();
            const userId=userIdElement.current.value;
            const postTitle=postTitleElement.current.value;
            const postBody=postBodyElement.current.value;
            const reactions=reactionsElement.current.value;
            const tags=tagsElement.current.value.split(" ");

userIdElement.current.value="";
postTitleElement.current.value="";
postBodyElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";







            addPost(userId,postTitle,postBody,reactions,tags);

          }

  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your UserId here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you felling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="title"
            placeholder="How many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtag here
          </label>
          <input
            type="tags"
            ref={tagsElement}
            className="form-control"
            id="title"
            placeholder="please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
