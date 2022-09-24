import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import PersonIcon from "@mui/icons-material/Person";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
import RepoDetails from "../UserDetails/RepoDetails";
import "./User.css";

const User = () => {
  const { login, user, location, site, github } = useParams();
  console.log(useParams);

  //UserInformation
  const [userInfo, setUserInfo] = useState({});
  //User repos
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  }, []);

  return (
    <div className="container">
      <Link to="/" className="back">
        Back
      </Link>
      <div className="user-information">
        <div className="image">
          <img src={userInfo?.avatar_url} />
        </div>
        <div className="user-content">
          <h3>{userInfo?.name}</h3>
          <p>{userInfo?.bio}</p>
          <div className="more-data">
            <p>
              <PersonIcon user={user} />
              {userInfo?.followers} Followers. Following {userInfo?.following}
            </p>
            {userInfo?.location && (
              <p>
                <LocationOnIcon location={location} />
                {userInfo?.location}
              </p>
            )}
            {userInfo?.blog && (
              <p>
                <OpenInBrowserIcon site={site} />
                {userInfo?.blog}
              </p>
            )}
            <p>
              <GitHubIcon github={github} />{" "}
              <a href={userInfo?.html_url}>view Git Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className="user-repos">
        {repos ? (
          repos.map((repo) => {
            return <RepoDetails repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No repos for this user...</h2>
        )}
      </div>
    </div>
  );
};

export default User;
