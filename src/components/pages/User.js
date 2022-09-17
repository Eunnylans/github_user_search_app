import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="container">
      <div className="user-information">
        <div className="image"></div>
        <div className="user-content">
          <h3> Name of User</h3>
          <p>Bio</p>
          <div className="more-data"></div>
        </div>
      </div>
    </div>
  );
};

export default User;
