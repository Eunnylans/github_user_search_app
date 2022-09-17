import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="container">
      <div className="user-information">
        <div className="image">
          <img
            src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G9o73-7NUBgAX-d0DCr&_nc_oc=AQnhIYyj6AV506JCkX-WQMqhNyYsyNu5uneln_s1CUO9h2_GZAJnzTNFV9PQGuRMnzY&tn=6n4Q6I1YmwmBo1l1&_nc_ht=scontent-frt3-1.xx&oh=00_AT_mrBovunTS_QpR-KtHSZgcWldklzchmHFl_bGbYHN0hw&oe=634915C2"
            alt=""
          />
        </div>
        <div className="user-content">
          <h3> Name of User</h3>
          <p>Bio</p>
          <div className="more-data">
            <p>
              <PersonIcon />
              20 Followers. Following 10
            </p>
            <p>
              <LocationOnIcon />
              South Africa
            </p>
            <p>
              <OpenInBrowserIcon />
              Portfolio.com
            </p>
            <p>
              <GitHubIcon /> <a href="#">view Git Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className="user-repos">
        <div className="repo">
          <h3>Name of the repo</h3>
          <p>Repo Description</p>
          <small>Written in JavaScript</small>
        </div>
      </div>
    </div>
  );
};

export default User;
