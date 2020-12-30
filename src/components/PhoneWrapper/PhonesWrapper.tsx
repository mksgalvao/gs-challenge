import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesList } from "../../actions/phonesActions";
import { CardComponent } from "../CardComponent/CardComponent";
import { phoneWrapperStyles } from "./PhonesWrapperStyle";
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

// should be replaced for a card props type
export const PhonesWrapper = (props: any) => {
  const dispatch = useDispatch();
  const classes = phoneWrapperStyles();
  let history = useHistory();

  useEffect(() => {
    dispatch(getPhonesList());
  }, [dispatch]);
  //@ts-ignore
  //should remove it
  const phones = useSelector((state) => state.phones.phones);
  //@ts-ignore
  const isLoading = useSelector((state) => state.phones.loading);

  const [filteredPhones, setFilteredPhones] = useState(phones);

  useEffect(() => {
    setFilteredPhones(phones);
  }, [phones]);

  const onDeleteClick = () => {
    console.log("On delete");
  };

  const onCardClick = (phone: any) => {
    history.push({
      pathname: `/info/${phone.name}`,
      state: { phone: phone },
    });
  };
  const onEditClick = () => {
    console.log("On edit");
  };

  const onSearchPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchTerm = event.target.value;

    if (searchTerm.length === 1) {
      return setFilteredPhones(phones);
    }

    const searching = filteredPhones.filter((phone: any) =>
      phone.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhones(searching);
  };

  return (
    <div>
      {isLoading || !filteredPhones ? (
        <>
          <CircularProgress color="secondary" />
        </>
      ) : (
        <>
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
                onChange={onSearchPhone}
              />
            </div>
          </div>
          <div className={classes.cardsWrapper}>
            {filteredPhones.map((phone: any, index: number) => (
              <CardComponent
                key={index}
                phone={phone}
                onCardClick={onCardClick}
                onDelete={onDeleteClick}
                onEdit={onEditClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
