import { Button } from "@mui/material";

export default function EamptyPost({ handalGetPosts }) {
  return (
    <div className="eampty_post">
      <h1>There is no post.</h1>
      <br />
      <Button variant="contained" onClick={handalGetPosts}>
        Get Posts from server
      </Button>
    </div>
  );
}
