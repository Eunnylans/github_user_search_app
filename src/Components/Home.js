import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to our page</h1>
      <form className="form-inline mt-4 d-flex justify-content-center">
        <div className="form-group">
          <label for="userName">User Name</label>
          <input
            type="text"
            id="userName"
            className="form-control mx-sm-3"
            name="userName"
          />
        </div>
        <button type="submit" className="btn btn-primary ml-2">
          Find User
        </button>
      </form>
    </div>
  );
};

export default Home;
