import { useContext } from "react";
import Post from "./Post";
import { AppUIContext } from "../../store/App-store";

export default function Posts() {
  const { postList } = useContext(AppUIContext);
  return (
    <center
      style={{
        height: "100vh",
        overflow: "scroll",
        // overflowX: "hidden",
      }}
    >
      {postList.map((postData) => (
        <Post key={postData.id} post={postData} />
      ))}
    </center>
  );
}
