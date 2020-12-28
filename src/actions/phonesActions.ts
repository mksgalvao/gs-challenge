import { PhoneService } from "../services/phoneService/phoneService";
export const GET_PHONES_SUCCESS = "GET_PHONES_SUCCESS";
export const GET_PHONES_ERROR = "GET_PHONES_ERROR";
export const GET_PHONES_LOADING = "GET_PHONES_LOADING";

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
