const CreatePost = () => {
  return (
    <form className="createPost">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          placeholder="Enter your user Id"
          className="form-control"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post
        </label>
        <input
          type="text"
          placeholder="How are you feeling today...."
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={5}
          type="text"
          placeholder="Tell me more about yourself"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          placeholder="How many people reated to this post"
          className="form-control"
          id="reaction"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          placeholder="Enter tags!!! using space"
          className="form-control"
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
