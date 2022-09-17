import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="search-form">
        <h2>GitHub Search User</h2>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
      <div className="search-results">
        <div className="User">
          <div className="image">
          <img src='' alt="" />
          </div>
          <div className='user-info'>
          <h4>Name of User</h4>
          <small>ID</small>
          <a href=''>View profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
