import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sideBar/SideBar";
import styles from "./App.module.css";
import "./App.css";
import AppContextProvider from "./store/App-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppContextProvider>
      <div className={styles.app_container}>
        <SideBar className={styles.side_bar} />
        <div className={styles.content}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </AppContextProvider>
  );
}
export default App;
