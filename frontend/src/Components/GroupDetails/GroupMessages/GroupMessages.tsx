import {
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./GroupMessages.css";

function GroupMessages() {
  return (
    <>
      <div className="general-container">
        <div className="spaces-container full-height">
          <div className="spaces">
            <button>
              <HomeIcon />
            </button>
            <button>
              <AddCircleIcon />
            </button>
          </div>
        </div>
        <div className="messages-container">
          <div className="messages">
            <div className="message-container padding">
              <div className="from">
                <h5>Oscar</h5>
              </div>
              <div className="content">
                <p>Hola</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                aliquam quam? Id nemo ut esse sint, corporis aliquid ea optio
                facilis numquam omnis delectus animi cum assumenda laboriosam
                incidunt similique.
              </div>
            </div>
            <div className="message-container padding">
              <div className="from">
                <h5>Samuel</h5>
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                aliquam quam? Id nemo ut esse sint, corporis aliquid ea optio
                facilis numquam omnis delectus animi cum assumenda laboriosam
                incidunt similique. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum voluptates recusandae laboriosam quis
                et porro ipsam. Voluptate commodi excepturi, quisquam maxime
                fugiat delectus est et nemo quis, ullam, at illo. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. In ratione, nemo id
                deleniti, et atque, hic quam facilis sapiente odio temporibus
                tenetur totam quos. Sed ut voluptates itaque quisquam earum.
              </div>
            </div>
            <div className="message-container padding">
              <div className="from">
                <h5>Rangel</h5>
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptates recusandae laboriosam quis et porro ipsam. Voluptate
                commodi excepturi, quisquam maxime fugiat delectus est et nemo
                quis, ullam, at illo.
              </div>
            </div>
          </div>
          <div className="message-bar">
            <div className="text-area-wrapper">
              <textarea placeholder="Share ideas!"></textarea>
            </div>
            <div className="flex-icons">
              <button>
                <EmojiEmotionsIcon />
              </button>
              <button>
                <AttachFileIcon />
              </button>
              <button>
                <MoreHorizIcon />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="friends-container">
          <h3>Friends</h3>
          <hr />
            <div className="friend-container">
              <Avatar
                sx={{ width: 40, height: 40, margin: "auto", marginRight: "4rem" }}
                alt="Rangel"
              />
              <p>David</p>
            </div>
          <div className="friend-container">
            <p>Oscar</p>
          </div>
          <div className="friend-container">
            <p>Samuel</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default GroupMessages;
