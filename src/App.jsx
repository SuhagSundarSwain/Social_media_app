import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sideBar/SideBar";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.app_container}>
      <SideBar className={styles.side_bar} />
      <div className={styles.content}>
        <Header />
        <Footer />
      </div>
    </div>
  );
}
export default App;
