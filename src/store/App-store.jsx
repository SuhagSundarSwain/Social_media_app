import { Home, PostAdd } from "@mui/icons-material";
import { createContext, useReducer } from "react";
import { DEFAULT_POST_LIST } from "./Default-Post-List";
import { postListReducer, selectedTabReducer } from "./Reducer-Functions";

export const AppUIContext = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

export default function AppContextProvider({ children }) {
  let tabList = {
    Home: <Home />,
    CreatePost: <PostAdd />,
  };

  const [selectedTab, setSelectedTab] = useReducer(selectedTabReducer, "Home");
  const [postList, setPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const createPost = (newPost) => {
    let itemAction = { type: "CREATE_POST", payload: { newPost } };
    setPostList(itemAction);
  };
  const deletePost = (postId) => {
    let itemAction = { type: "DELETE_POST", payload: { postId } };
    setPostList(itemAction);
  };

  return (
    <AppUIContext.Provider
      value={{
        tabList,
        selectedTab,
        setSelectedTab,
        postList,
        createPost,
        deletePost,
      }}
    >
      {children}
    </AppUIContext.Provider>
  );
}
