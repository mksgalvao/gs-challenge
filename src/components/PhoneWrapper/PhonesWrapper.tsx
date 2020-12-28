import React from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import { phoneWrapperStyles } from "./PhonesWrapperStyle";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import history from "../../@history";

import iphoneImage from "../../assets/images/Iphone7.jpg";
import galaxyImage from "../../assets/images/Galaxy7.jpg";

const phones = [
  {
    id: 0,
    name: "iPhone7",
    manufacturer: "Apple",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: iphoneImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "Galaxy7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: galaxyImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
];

export const PhonesWrapper = (props: any) => {
  // should be replaced for a card props type
  const classes = phoneWrapperStyles();

  const onDeleteClick = () => {
    console.log("On delete");
  };
  const onMoreInfoClick = (phoneName: string) => {
    return history.push({
      pathname: `/info/${phoneName}`,
    });
  };
  const onEditClick = () => {
    console.log("On edit");
  };
  return (
    <div>
      <div className={classes.phoneWrapperHeader}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <CardComponent
        products={phones}
        onMoreInfo={onMoreInfoClick}
        onDelete={onDeleteClick}
        onEdit={onEditClick}
      />
    </div>
  );
};
