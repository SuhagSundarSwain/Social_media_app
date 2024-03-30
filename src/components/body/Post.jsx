import { Delete } from "@mui/icons-material";
import { useContext } from "react";
import { AppUIContext } from "../../store/App-store";

export default function Post({ post }) {
  const { deletePost } = useContext(AppUIContext);
  return (
    <div className="card post-card" style={{ width: "40rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post is liked by {post.reaction} people.
        </div>
      </div>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        <Delete />
        <span className="visually-hidden">unread messages</span>
      </span>
    </div>
  );
}
