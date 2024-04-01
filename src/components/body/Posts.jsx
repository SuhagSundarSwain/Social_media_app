import { useContext } from "react";
import Post from "./Post";
import { AppUIContext } from "../../store/App-store";
import EamptyPost from "./EamptyPost";
import LoadingSpinner from "./LoadingSpinner";

export default function Posts() {
  const { postList, fetching } = useContext(AppUIContext);

  // function handalGetPosts() {
  //   setFetching(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });
  // }

  return (
    <center
      style={{
        height: "83vh",
        overflow: "scroll",
        // overflowX: "hidden",
      }}
    >
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 ? (
        <EamptyPost />
      ) : (
        postList.map((postData) => <Post key={postData.id} post={postData} />)
      )}
    </center>
  );
}
