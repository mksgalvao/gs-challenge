import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { cardComponentStyles } from "./CardComponentStyle";

export const CardComponent = (props: any) => {
  const classes = cardComponentStyles();

  return (
    <Card
      onClick={() => props.onCardClick(props.phone)}
      className={classes.cardRoot}
    >
      <CardHeader
        title={props.phone.name}
        subheader={props.phone.manufacturer}
      />
      <CardMedia
        className={classes.media}
        image={props.phone.imageFileName}
        title={props.phone.price}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.phone.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete" onClick={props.onDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={props.onEdit}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
