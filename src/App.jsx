import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sideBar/SideBar";
import styles from "./App.module.css";
import { Home, PostAdd } from "@mui/icons-material";
import { useState } from "react";
import CreatePost from "./components/body/CreatePost";
import Post from "./components/body/Post";
import AppContextProvider from "./store/App-store";
function App() {
  let tabList = {
    Home: <Home />,
    CreatePost: <PostAdd />,
  };
  let [selectedTab, setSelectedTab] = useState("Home");
  return (
    <AppContextProvider value={{ tabList, selectedTab, setSelectedTab }}>
      <div className={styles.app_container}>
        <SideBar className={styles.side_bar} />
        <div className={styles.content}>
          <Header />
          {selectedTab === "Home" ? <Post /> : null}
          {selectedTab === "CreatePost" ? <CreatePost /> : null}
          <Footer />
        </div>
      </div>
    </AppContextProvider>
  );
}
export default App;
