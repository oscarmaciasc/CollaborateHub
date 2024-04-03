import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";


function AddGroup() {
  return (
    <>
      <Card sx={{ maxWidth: 350, m: 5 }}>
        <CardContent>
        </CardContent>
        <CardActions>
          <Button size="small">+</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default AddGroup;
