import React, { useEffect } from "react";
import { PhonesWrapper } from "../../components/PhoneWrapper/PhonesWrapper";
import { useSelector, useDispatch } from "react-redux";
import {
  getPhonesList,
  addPhone,
  deletePhone,
  updatePhone,
} from "../../actions/phonesActions";
import { PhoneType } from "../../fixtures/phoneFixtures";
import CircularProgress from "@material-ui/core/CircularProgress";

export const PhonesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhonesList());
  }, [dispatch]);

  //@ts-ignore
  const phones = useSelector((state) => state.phones.phones);

  const dispatchAddPhone = (phone: PhoneType) => {
    dispatch(addPhone(phone));
  };
  const dispatchDeletePhone = (phone: PhoneType) => {
    dispatch(deletePhone(phone.id));
  };
  const dispatchUpdatePhone = (phone: PhoneType) => {
    dispatch(updatePhone(phone));
  };

  return (
    <>
      {!phones ? (
        <CircularProgress color="secondary" />
      ) : (
        <div>
          {console.log(phones)}
          <PhonesWrapper
            phones={phones}
            onAddPhone={dispatchAddPhone}
            onDeletePhone={dispatchDeletePhone}
            onUpdatePhone={dispatchUpdatePhone}
          />
        </div>
      )}
    </>
  );
};
