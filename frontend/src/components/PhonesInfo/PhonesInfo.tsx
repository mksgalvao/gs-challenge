import React from "react";
import { phonesInfoStyle } from "./PhonesInfoStyle";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const PhonesInfo = (props: any) => {
  const product = props.location.state.phone;
  const classes = phonesInfoStyle();

  return (
    <div className={classes.root}>
      <Card className={classes.cardWrapper}>
        <Typography paragraph>{product.name}</Typography>
        <CardMedia className={classes.media} image={product.imageFileName} />
        <CardContent>
          <Typography paragraph>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(product.price)}
          </Typography>
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
      </Card>
    </div>
  );
};
