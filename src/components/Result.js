import React, { useState, useEffect } from 'react';
import useLocalStorageState from "../hooks/useLocalStorageState"
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from '@mui/material/colors';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from '@mui/material/Button';
import '../styles/Result.css';

const ExpandMore = styled((props) => { ///Code for the expand function on the MUI card.
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

function Result(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [favdStatus, setFavdStatus] = useState(false);
  const [favs] = useLocalStorageState(); //Imports the fav'd exercises in localStorage so this component can check if they are fav'd & determine which button to render. 

  const capitalizer = (input) => input.charAt(0).toUpperCase() + input.slice(1); //Capitalizes first letter.

  useEffect(() => {
    for (let i = 0; i < favs.length; i++) { //Searches through the imported favs.
      if (favs[i].id === props.data.id) { //If the id is found to match the id of a result of the fav'd list, set setFavdStatus to true.
        setFavdStatus(true)
      }
    }
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li
      id={props.data.id}
      className="Result"
    >
      <Card
        className="Result-card"
        raised
      >
        <CardActions disableSpacing>
          <CardHeader
            className="Result-header"
            sx={{ padding: "0" }}
            action={
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            }
            title={capitalizer(props.data.name)} />
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <CardMedia
              component="img"
              image={props.data.gifUrl}
              alt="Exercise title here"
            />
            <Typography paragraph><b>Target muscle:</b> {capitalizer(props.data.target)}</Typography>
            <Typography paragraph><b>Body part used:</b> {capitalizer(props.data.bodyPart)}</Typography>
            <Typography paragraph><b>Equipment required:</b> {capitalizer(props.data.equipment)}</Typography>
            <Box textAlign='center'>
              {(favdStatus) ? <Button //Which button is rendered is determined by whether the ID of this exercise appeared in the imported favs. If this exercise is already fav'd a "remove" button will be rendered. 
                sx={{ bgcolor: red[700], ':hover': { bgcolor: red[900] } }}
                variant="contained"
                onClick={() => { props.remove(props.data); setFavdStatus(false); }}
              >
                Remove from Favs
              </Button>
                :
                <Button
                  variant="contained"
                  onClick={() => { props.save(props.data); setFavdStatus(true); }}
                >
                  Save to favs
                </Button>}
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </li>
  );
}

export default Result;