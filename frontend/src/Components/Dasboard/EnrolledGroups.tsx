import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DEFAULT_GROUP_IMAGE: string = '../../src/assets/rocket.jpg'

interface Group {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface EnrolledGroupsProp {
  userId: string;
}

const EnrolledGroups: React.FC<EnrolledGroupsProp> = ({ userId }) => {
  const [enrolledGroups, setEnrolledGroups] = useState<Group[]>([]);

  useEffect(() => {
    const fetchEnrolledGroups = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3011/api/v1/groups/findByMember/${userId}`
        );
        setEnrolledGroups(response.data.groups);
        console.log(
          "EnrolledGroups: " + JSON.stringify(response.data, null, 2)
        );
      } catch (error) {
        console.error("Error fetching enrolled groups:", error);
      }
    };

    fetchEnrolledGroups();

    return () => {
      // Any cleanup code if neccesary
    };
  }, [userId]);

  return (
    <>
    <div>
      {enrolledGroups.map((group) => (
        <Card key={group.id} sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt={group.name}
            height="140"
            image={group.image || DEFAULT_GROUP_IMAGE }
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {group.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {group.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Enrolle</Button>
          </CardActions>
        </Card>
      ))}
    </div>
    </>
  );
};

export default EnrolledGroups;
