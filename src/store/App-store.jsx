import { Home, PostAdd } from "@mui/icons-material";
import { createContext, useEffect, useReducer, useState } from "react";
// import { DEFAULT_POST_LIST } from "./Default-Post-List";
import { postListReducer, selectedTabReducer } from "./Reducer-Functions";

export const AppUIContext = createContext({
  postList: [],
  fetching: false,
  createPost: () => {},
  deletePost: () => {},
});

export default function AppContextProvider({ children }) {
  let tabList = {
    Home: <Home />,
    CreatePost: <PostAdd />,
  };

  const [selectedTab, setSelectedTab] = useReducer(selectedTabReducer, "Home");
  const [postList, setPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  const createPost = (newPost) => {
    let itemAction = { type: "CREATE_POST", payload: { newPost } };
    setPostList(itemAction);
  };
  const deletePost = (postId) => {
    let itemAction = { type: "DELETE_POST", payload: { postId } };
    setPostList(itemAction);
  };

  const addInitialPosts = (postLists) => {
    let itemAction = { type: "ADD_INITIAL_POSTS", payload: { postLists } };
    setPostList(itemAction);
  };

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

    /*it is required but commenting beacuse giving some error and resolve later*/
    /*Giving error for strictmode it is calling twice and 2nd time it is aborted */
    // return () => {
    //   console.log("Cleaning up useEffect.");
    //   controller.abort();
    // };
  }, []);

  return (
    <AppUIContext.Provider
      value={{
        tabList,
        selectedTab,
        setSelectedTab,
        postList,
        createPost,
        deletePost,
        fetching,
      }}
    >
      {children}
    </AppUIContext.Provider>
  );
}
