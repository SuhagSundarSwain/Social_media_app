import Post from "./Post";
import EamptyPost from "./EamptyPost";
import { useLoaderData } from "react-router-dom";

export default function Posts() {
  const postList = useLoaderData();

  return (
    <center
      style={{
        height: "83vh",
        overflow: "scroll",
        // overflowX: "hidden",
      }}
    >
      {postList.length === 0 ? (
        <EamptyPost />
      ) : (
        postList.map((postData) => <Post key={postData.id} post={postData} />)
      )}
    </center>
  );
}

export async function postLoader() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
}
