import {
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "./GroupMessages.css";

function GroupMessages() {
  return (
    <>
      <div className="spaces-container full-height">
        <List>
          <ListItemButton>
            <ListItem disablePadding>
              <ListItemIcon sx={{ textAlign: "center", alignItems: "center" }}>
                <HomeIcon/>
              </ListItemIcon>
            </ListItem>
          </ListItemButton>
        </List>
      </div>
    </>
  );
}

export default GroupMessages;
