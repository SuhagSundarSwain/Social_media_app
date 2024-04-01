import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePost from "./components/body/CreatePost";
import Posts from "./components/body/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Home", element: <Posts /> },
      { path: "/CreatePost", element: <CreatePost /> },
    ],
  },
]);
export default router;
