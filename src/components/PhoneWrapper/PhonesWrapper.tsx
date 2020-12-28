import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesList } from "../../actions/phonesActions";
import { CardComponent } from "../CardComponent/CardComponent";
import { phoneWrapperStyles } from "./PhonesWrapperStyle";
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import history from "../../@history";

// should be replaced for a card props type
export const PhonesWrapper = (props: any) => {
  const dispatch = useDispatch();
  const classes = phoneWrapperStyles();
  useEffect(() => {
    dispatch(getPhonesList());
  }, [dispatch]);
  //@ts-ignore
  //should remove it
  const phones = useSelector((state) => state.phones.phones);
  //@ts-ignore
  const isLoading = useSelector((state) => state.phones.loading);

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
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          {console.log(phones)}
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
        </>
      )}
    </div>
  );
};
