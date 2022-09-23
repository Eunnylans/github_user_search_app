import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const User = () => {
  const { login } = useParams();

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
          <h3>
            <a href="#">Name of the repo</a>
          </h3>
          <p>Repo Description</p>
          <small>Written in JavaScript</small>
        </div>
      </div>
    </div>
  );
};

export default User;
