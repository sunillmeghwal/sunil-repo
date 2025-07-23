import { useRef } from "react";

function CreatePost() {

  const userId= useRef();
    const postTitle= useRef();
      const postBody= useRef();
        const reactions= useRef();
          const tags= useRef();

  return (
    <div>
      <form className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your UserId here
          </label>
          <input
            type="text"
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
