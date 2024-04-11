import { Typography } from "@mui/material";
import "./Cover.css";

function Cover() {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <Typography>CollaborateHub</Typography>
        </div>
        <div className="nav-links">
          <a href="#">
            <Typography>Home</Typography>
          </a>
          <a href="#"><Typography>Discover</Typography></a>
          <a href="#"><Typography>Sign In</Typography></a>
          <a href="#"><Typography>Log In</Typography></a>
        </div>
      </div>
      
      <div className="Cover">
        <div className="question-one">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Build a rocketship?
          </Typography>
        </div>
        <div className="question-two">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Create a videogame?
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Cover;
