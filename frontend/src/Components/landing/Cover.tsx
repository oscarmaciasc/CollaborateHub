import { Typography } from "@mui/material";
import "./Cover.css";

function Cover() {
  return (
    <>
      <div className="container-landing">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="nav">
          <div className="nav-logo">
            <Typography>CollaborateHub</Typography>
          </div>
          <div className="nav-links">
            <a href="#home">
              <Typography>Home</Typography>
            </a>
            <a href="#discover">
              <Typography>Discover</Typography>
            </a>
            <a href="/signup">
              <Typography>Sign Up</Typography>
            </a>
            <a href="/login">
              <Typography>Sign In</Typography>
            </a>
          </div>
        </div>

        <div className="Cover" id="home">
          <div className="question-one">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Build a rocketship?
            </Typography>
          </div>
          <div className="rocket-general">
            <img src="" alt="" className="rocket-img" />
            <img
              src="../../src/assets/rocket-real/rocket-tip.png"
              alt=""
              className="rocket-img"
              id="rocket-tip"
            />
            <img
              src="../../src/assets/rocket-real/rocket-body.png"
              alt=""
              className="rocket-img"
              id="rocket-body"
            />
            <img
              src="../../src/assets/rocket-real/rocket-window-1.png"
              alt=""
              className="rocket-img"
              id="rocket-window-one"
            />
            <img
              src="../../src/assets/rocket-real/rocket-window-2.png"
              alt=""
              className="rocket-img"
              id="rocket-window-two"
            />
            <img
              src="../../src/assets/rocket-real/rocket-flag-1.png"
              alt=""
              className="rocket-img"
              id="rocket-flag-one"
            />
            <img
              src="../../src/assets/rocket-real/rocket-flag-2.png"
              alt=""
              className="rocket-img"
              id="rocket-flag-two"
            />
            <img
              src="../../src/assets/rocket-real/rocket-flag-3.png"
              alt=""
              className="rocket-img"
              id="rocket-flag-three"
            />
            <img
              src="../../src/assets/rocket-real/rocket-bottom.png"
              alt=""
              className="rocket-img"
              id="rocket-bottom"
            />
            <img
              src="../../src/assets/rocket-real/rocket-cloud.png"
              alt=""
              className="rocket-img"
              id="rocket-cloud"
            />
          </div>
          <div className="question-two">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Create a videogame?
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
