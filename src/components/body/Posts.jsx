import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { AppUIContext } from "../../store/App-store";
import EamptyPost from "./EamptyPost";
import LoadingSpinner from "./LoadingSpinner";

export default function Posts() {
  const { postList, addInitialPosts } = useContext(AppUIContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning up useEffect.");
      controller.abort();
    };
  }, []);
  function handalGetPosts() {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }

  return (
    <center
      style={{
        height: "100vh",
        overflow: "scroll",
        // overflowX: "hidden",
      }}
    >
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 ? (
        <EamptyPost handalGetPosts={handalGetPosts} />
      ) : (
        postList.map((postData) => <Post key={postData.id} post={postData} />)
      )}
    </center>
  );
}
