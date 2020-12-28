import { PhoneService } from "../services/phoneService/phone.service";
export const GET_PHONES_SUCCESS = "GET_PHONES_SUCCESS";
export const GET_PHONES_ERROR = "GET_PHONES_ERROR";
export const GET_PHONES_LOADING = "GET_PHONES_LOADING";

export const getProductList = () => (dispatch: any) => {
  dispatch({
    type: GET_PHONES_LOADING,
  });

  const response: any = new PhoneService("/phone");

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
};
