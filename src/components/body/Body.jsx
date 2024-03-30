import { useContext } from "react";
import Posts from "./Posts";
import { AppUIContext } from "../../store/App-store";
import CreatePost from "./CreatePost";

export default function Body() {
  const { selectedTab } = useContext(AppUIContext);

  return (
    <div >
      {selectedTab === "Home" ? <Posts /> : null}
      {selectedTab === "CreatePost" ? <CreatePost /> : null}
    </div>
  );
}
