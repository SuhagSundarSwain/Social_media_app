import { Form, redirect } from "react-router-dom";

export default function CreatePost() {
  return (
    <Form method="POST" style={{ width: "50%" }}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your post title"
          id="title"
          aria-describedby="emailHelp"
          name="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Tell more about this post
        </label>
        <br />
        <textarea
          type="text"
          className="form-control"
          placeholder="Enter post details"
          id="body"
          name="body"
        />
      </div>
      <div>
        <label className="form-label">Tags</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter tags with comma(,)"
          name="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Post/print on console
      </button>
    </Form>
  );
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  return redirect("/");
}
