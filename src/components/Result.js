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
import ListItem from '@mui/material/ListItem';

import '../styles/Result.css';

const ExpandMore = styled((props) => {
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

  const [favs] = useLocalStorageState(); //Imports the favd exercises in localStorage so it ca 

  const capitalizer = (input) => input.charAt(0).toUpperCase() + input.slice(1);

  useEffect(() => { // Can the for loop & the favdStatus  be moved to a hook?
    for (let i = 0; i < favs.length; i++) {
      if (favs[i].id === props.data.id) {
        setFavdStatus(true)
      }
    }
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li 
    //disablePadding
    style={{marginBottom: "10px"}}
    >
    <Card
      id={props.data.id}
      className="Result"
      raised
      sx={{ maxWidth: 400, textAlign: "left", mb: "30px", margin: "auto"}}
      >
      <CardActions disableSpacing>
        <CardHeader
          sx={{ width: "100%" }}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardMedia
            component="img"
            //height="194"
            image={props.data.gifUrl}
            alt="Exercise title here"
          />
          <Typography paragraph><b>Target:</b> {capitalizer(props.data.target)}</Typography>
          <Typography paragraph><b>Equipment required:</b> {capitalizer(props.data.equipment)}</Typography>
          <Box textAlign='center'>
            {(favdStatus) ? <Button
              sx={{ bgcolor: red[700], ':hover': {bgcolor: red[900]} }}
              variant="contained"
              onClick={() => { props.remove(props.data); setFavdStatus(false); }}>
              Remove from Favs
            </Button>
              :
              <Button
                variant="contained"
                onClick={() => { props.save(props.data); setFavdStatus(true); }}>
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