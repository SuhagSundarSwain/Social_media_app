import { createContext } from "react";

export const AppContext = createContext({
  tabList: {},
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

export default function AppContextProvider({ children, value }) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
