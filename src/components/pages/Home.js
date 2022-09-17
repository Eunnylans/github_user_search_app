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
        <div className="user">
          <div className="image">
          <img src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G9o73-7NUBgAX-d0DCr&_nc_oc=AQnhIYyj6AV506JCkX-WQMqhNyYsyNu5uneln_s1CUO9h2_GZAJnzTNFV9PQGuRMnzY&tn=6n4Q6I1YmwmBo1l1&_nc_ht=scontent-frt3-1.xx&oh=00_AT_mrBovunTS_QpR-KtHSZgcWldklzchmHFl_bGbYHN0hw&oe=634915C2' alt="" />
          </div>
          <div className='user-info'>
          <h3>Name of User</h3>
          <small>ID532kl: </small>
          <a href="">View profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
