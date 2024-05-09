import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from "@mui/material";
import "./Discover.css";

const DEFAULT_GROUP_IMAGE: string = "../../src/assets/rocket.jpg";

interface Group {
  _id: string;
  name: string;
  description: string;
  image: string;
}

function Discover() {
  const [enrolledGroups, setEnrolledGroups] = useState<Group[]>([]);

  useEffect(() => {
    const fetchEnrolledGroups = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3011/api/v1/groups/findAllGroups'
        );
        setEnrolledGroups(response.data.groups);
      } catch (error) {
        console.error("Error fetching enrolled groups:", error);
      }
    };

    fetchEnrolledGroups();

    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return (
    <>
      <div className="container-landing-groups">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="Discover" id="discover">
          <div className="groups-title">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Join our groups!
            </Typography>
          </div>
          <div className="grid">
            {/* Map over enrolledGroups to render gridElements with images */}
            {enrolledGroups.map(group => (
              <div key={group._id} className="gridElement">
                <img src={group.image || DEFAULT_GROUP_IMAGE} alt={group.name} />
                <Typography variant="h6" gutterBottom>{group.name}</Typography>
                <Typography variant="body1">{group.description}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
