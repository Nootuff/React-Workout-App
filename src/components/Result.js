import React, { useState, useEffect } from 'react';
import useLocalStorageState from "../hooks/useLocalStorageState"

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
//import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
//import { red } from "@mui/material/colors";
//import FavoriteIcon from "@mui/icons-material/Favorite";
//import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import MoreVertIcon from "@mui/icons-material/MoreVert";
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
            if(favs[i].id === props.data.id){
                 setFavdStatus(true)
              }  
            }}, []);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card 
      id={props.data.id} 
      sx={{ maxWidth: 345, margin: "auto", textAlign: "left"  }}>
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
            {(favdStatus) ? /*"favd" : "not favd"*/ <button onClick={() => {props.remove(props.data); setFavdStatus(false); }}>Remove from Favs</button> : <button onClick={() => {props.save(props.data); setFavdStatus(true);}}>Save to favs</button>}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  
  export default Result;