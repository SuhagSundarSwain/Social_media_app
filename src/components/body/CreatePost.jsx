import { useContext, useRef } from "react";
import { AppUIContext } from "../../store/App-store";

export default function CreatePost() {
  const { createPost, setSelectedTab } = useContext(AppUIContext);
  const titleElement = useRef("");
  const bodyElement = useRef("");
  const tagsElement = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPost = {
      id: Date.now(),
      title: titleElement.current.value,
      body: bodyElement.current.value,
      reaction: "50k",
      userId: "user-16",
      tags: tagsElement.current.value.split(","),
    };
    createPost(newPost);
    setSelectedTab("Home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your post title"
          id="title"
          aria-describedby="emailHelp"
          ref={titleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Tell more about this post
        </label>
        <br />
        <textarea
          type="text"
          className="form-control"
          placeholder="Enter post details"
          id="body"
          ref={bodyElement}
        />
      </div>
      <div>
        <label className="form-label">Tags</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter tags with comma(,)"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
}
