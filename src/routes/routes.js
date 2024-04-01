import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreatePost from "../components/body/CreatePost";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-post", element: <CreatePost /> },
]);
export default router;
