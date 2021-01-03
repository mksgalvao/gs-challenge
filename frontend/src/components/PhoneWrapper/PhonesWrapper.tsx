import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesList } from "../../actions/phonesActions";
import { CardComponent } from "../CardComponent/CardComponent";
import { phoneWrapperStyles } from "./PhonesWrapperStyle";
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { FormComponent } from "../FormComponent/FormComponent";
import { DeleteModalComponent } from "../DeleteModalComponent/DeleteModalComponent";

// should be replaced for a card props type
export const PhonesWrapper = (props: any) => {
  const dispatch = useDispatch();
  const classes = phoneWrapperStyles();
  let history = useHistory();

  useEffect(() => {
    dispatch(getPhonesList());
  }, [dispatch]);
  //@ts-ignore
  const phones = useSelector((state) => state.phones.phones);

  //@ts-ignore
  const isLoading = useSelector((state) => state.phones.loading);

  const [filteredPhones, setFilteredPhones] = useState(phones);
  const [showModal, setShowModal] = useState({ isOpen: false, type: "edit" });
  const [clickedPhone, setClickedPhone] = useState();
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    setFilteredPhones(phones);
  }, [phones]);

  const onDeleteClick = (e: React.MouseEvent<HTMLElement>, phone: any) => {
    setClickedPhone(phone);
    e.stopPropagation();

    setDeleteModal(!deleteModal);
  };

  const onCardClick = (phone: any) => {
    history.push({
      pathname: `/info/${phone.name}`,
      state: { phone: phone },
    });
  };
  const onEditClick = (e: React.MouseEvent<HTMLElement>, phone: any) => {
    setClickedPhone(phone);
    e.stopPropagation();

    setShowModal({ isOpen: !showModal.isOpen, type: "edit" });
  };

  const handleAddNewPhone = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    setShowModal({ isOpen: !showModal.isOpen, type: "add" });
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
                onChange={onSearchPhone}
              />
            </div>
          </div>
          <div className={classes.cardsWrapper}>
            {Object.entries(filteredPhones).map((phone: any, index: number) => (
              <CardComponent
                key={index}
                phone={phone[1]}
                onCardClick={onCardClick}
                onDelete={(e: React.MouseEvent<HTMLElement>) => {
                  onDeleteClick(e, phone);
                }}
                onEdit={(e: React.MouseEvent<HTMLElement>) => {
                  onEditClick(e, phone);
                }}
              />
            ))}
          </div>
          {showModal.isOpen && (
            <FormComponent
              showModal={showModal}
              phone={clickedPhone ? clickedPhone : ""}
            />
          )}

          {deleteModal && (
            <DeleteModalComponent
              showModal={deleteModal}
              phone={clickedPhone}
            />
          )}
          <Fab
            className={classes.addButton}
            color="primary"
            aria-label="add"
            onClick={handleAddNewPhone}
          >
            <AddIcon />
          </Fab>
        </>
      )}
    </div>
  );
};
