import React from "react";
import "./GroupLanding.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Members from "./Members";

const DEFAULT_GROUP_IMAGE: string = "../../../src/assets/rocket.jpg";

interface Group {
  _id: string;
  name: string;
  description: string;
  image: string;
  members: string[];
}

interface GroupProps {
  group: Group;
}



const GroupLanding: React.FC<GroupProps> = ({ group }) => {
  return (
    <>
      <section>
        <Card>
          <CardMedia
            component="img"
            alt={group.name}
            height="450"
            image={group.image || DEFAULT_GROUP_IMAGE}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {group.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {group.description}
            </Typography>
          </CardContent>
        </Card>
      </section>

      <section>
        {group && <Members members={group.members}/>}
      </section>
    </>
  );
};

export default GroupLanding;
