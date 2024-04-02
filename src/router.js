import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePost, { createPostAction } from "./components/body/CreatePost";
import Posts, { postLoader } from "./components/body/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Home", element: <Posts />, loader: postLoader },
      {
        path: "/CreatePost",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);
export default router;
