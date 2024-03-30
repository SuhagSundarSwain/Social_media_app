import { useContext } from "react";
import Post from "./Post";
import { AppUIContext } from "../../store/App-store";
import EamptyPost from "./EamptyPost";

export default function Posts() {
  const { postList, addInitialPosts } = useContext(AppUIContext);

  function handalGetPosts() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  }

  return (
    <center
      style={{
        height: "100vh",
        overflow: "scroll",
        // overflowX: "hidden",
      }}
    >
      {postList.length === 0 ? (
        <EamptyPost handalGetPosts={handalGetPosts} />
      ) : (
        postList.map((postData) => <Post key={postData.id} post={postData} />)
      )}
    </center>
  );
}
