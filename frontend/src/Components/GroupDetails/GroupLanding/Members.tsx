import { Grid, Card, CardContent, CardMedia, Typography, makeStyles, AvatarGroup } from "@mui/material";
import { Avatar } from "@mui/material";
import { useState, useEffect, Profiler } from "react";
import axios from "axios";
import "./Members.css";

interface MemberProps {
  members: string[]; // Change the interface to expect an array of strings
}

interface UserProfile {
  user: {
    profile: {
      firstName: string;
      lastName: string;
      avatar: string;
      bio: string;
    };
  };
}

const Member: React.FC<MemberProps> = ({ members }) => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const promises = members.map((userId) =>
          axios.get<UserProfile>(
            `http://localhost:3011/api/v1/users/findById/${userId}`
          )
        );
        const responses = await Promise.all(promises);
        const profiles = responses.map((response) => response.data);
        console.log("Profiles:");
        profiles.forEach((profile, index) => {
          console.log(`Profile ${index + 1}:`, profile);
        });
        setUserProfiles(profiles);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfiles();
  }, [members]);

  return (
    <>
      <Typography padding={6} variant="h4">
        Meet our collaborators!
      </Typography>
      <Grid justifyContent="center" container spacing={3}>
        {userProfiles.map((profile, index) => (
          <Grid item key={index}>
              <Card className="Card"
                sx={{ width: 250, height: 270}}
              >
                <CardMedia sx={{ marginTop: 2 }}>
                  <Avatar
                    sx={{ width: 120, height: 120, margin: "auto" }}
                    alt={`${profile.user.profile.firstName} ${profile.user.profile.lastName}`}
                    src={profile.user.profile.avatar}
                  />
                </CardMedia>
                <CardContent sx={{ padding: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    {profile.user.profile.firstName}{" "}
                    {profile.user.profile.lastName}
                  </Typography>
                  <Typography paragraph gutterBottom>
                    {profile.user.profile.bio}
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Member;
