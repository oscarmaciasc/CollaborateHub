import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import "../Dasboard/EnrolledGroups.css";
import { Link } from "@mui/material";

const DEFAULT_GROUP_IMAGE: string = "../../src/assets/rocket.jpg";

interface Group {
  _id: string;
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
        <div className="Grid">
          {enrolledGroups.map((group) => (
            <Card key={group._id} sx={{ maxWidth: 350, m: 5 }}>
              <CardMedia
                component="img"
                alt={group.name}
                height="140"
                image={group.image || DEFAULT_GROUP_IMAGE}
              />
              <CardContent>
                <RouterLink
                  to={`http://localhost:5173/groupDetails/${group._id}`}
                  className="link"
                >
                  <Link className="link"
                  underline="none"
                  gutterBottom
                  variant="h6"
                  component="div">
                    {group.name}
                  </Link>
                </RouterLink>
                <Typography variant="body2" color="text.secondary">
                  {group.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnrolledGroups;
