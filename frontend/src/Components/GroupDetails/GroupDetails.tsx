import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PersistentDrawerLeft from "./Drawer";

interface Group {
  _id: string;
  name: string;
  description: string;
  image: string;
}

const GroupDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [group, setGroup] = useState<Group>();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3011/api/v1/groups/findByGroupId/${id}`)
        .then((response) => {
          setGroup(response.data.group);
        })
        .catch((error) => {
          console.error("Error fetching group details:", error);
        });
    }
  }, [id]);

  return (
    <>
        {group && <PersistentDrawerLeft group={group}/>}
    </>
  );
};

export default GroupDetails;
