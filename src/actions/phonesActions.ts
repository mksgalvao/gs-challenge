import { PhoneService } from "../services/phoneService/phoneService";
import { PhoneType } from "../fixtures/phoneFixtures";
export const GET_PHONES_SUCCESS = "GET_PHONES_SUCCESS";
export const GET_PHONES_ERROR = "GET_PHONES_ERROR";
export const GET_PHONES_LOADING = "GET_PHONES_LOADING";
export const DELETE_PHONE_SUCCESS = "DELETE_PHONE_SUCCESS";
export const DELETE_PHONE_ERROR = "DELETE_PHONE_ERROR";
export const DELETE_PHONE_LOADING = "DELETE_PHONE_LOADING";
export const ADD_PHONE_SUCCESS = "ADD_PHONE_SUCCESS";
export const ADD_PHONE_ERROR = "ADD_PHONE_ERROR";
export const ADD_PHONE_LOADING = "ADD_PHONE_LOADING";
export const UPDATE_PHONE_SUCCESS = "UPDATE_PHONE_SUCCESS";
export const UPDATE_PHONE_ERROR = "UPDATE_PHONE_ERROR";
export const UPDATE_PHONE_LOADING = "UPDATE_PHONE_LOADING";

export const getPhonesList = () => (dispatch: any) => {
  dispatch({
    type: GET_PHONES_LOADING,
  });

  const phonesService = new PhoneService("http://localhost:8080");
  phonesService.getPhones().then((response) => {
    if (response.status === 200) {
      dispatch({
        type: GET_PHONES_SUCCESS,
        data: response.data,
      });
    } else {
      dispatch({
        type: GET_PHONES_ERROR,
      });
    }
  });
};

export const addPhone = (phone: PhoneType) => (dispatch: any) => {
  dispatch({
    type: ADD_PHONE_LOADING,
  });

  const phonesService = new PhoneService("http://localhost:8080");
  phonesService.addPhone(phone).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: ADD_PHONE_SUCCESS,
        data: response.data,
      });
    } else {
      dispatch({
        type: ADD_PHONE_ERROR,
      });
    }
  });
};

export const deletePhone = (phoneId: number) => (dispatch: any) => {
  dispatch({
    type: DELETE_PHONE_LOADING,
  });

  const phonesService = new PhoneService("http://localhost:8080");
  phonesService.deletePhone(phoneId).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: DELETE_PHONE_SUCCESS,
        data: response.data,
      });
    } else {
      dispatch({
        type: DELETE_PHONE_ERROR,
      });
    }
  });
};

export const updatePhone = (phone: PhoneType) => (dispatch: any) => {
  dispatch({
    type: UPDATE_PHONE_LOADING,
  });

  const phonesService = new PhoneService("http://localhost:8080");
  phonesService.updatePhone(phone).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: UPDATE_PHONE_SUCCESS,
        data: response.data,
      });
    } else {
      dispatch({
        type: UPDATE_PHONE_ERROR,
      });
    }
  });
};
