import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { cardComponentStyles } from "./CardComponentStyle";

export const CardComponent = (props: any) => {
  const classes = cardComponentStyles();

  return (
    <div className={classes.cardsWrapper}>
      {props.products.map((product: any, index: number) => (
        <Card key={index} className={classes.root}>
          <CardHeader title={product.name} subheader={product.manufacturer} />
          <CardMedia
            className={classes.media}
            image={product.imageFileName}
            title={product.price}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="delete" onClick={props.onDelete}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={props.onEdit}>
              <EditIcon />
            </IconButton>
            <Link to={`/info/${product.name}`}>More Infos</Link>
          </CardActions>
          <Collapse timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{product.name}</Typography>
              <Typography paragraph>{product.price}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.color}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {product.screen}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {product.ram}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {product.processor}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};
