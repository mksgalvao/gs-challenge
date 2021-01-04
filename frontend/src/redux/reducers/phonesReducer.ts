import {
  GET_PHONES_ERROR,
  GET_PHONES_SUCCESS,
  GET_PHONES_LOADING,
  DELETE_PHONE_ERROR,
  DELETE_PHONE_LOADING,
  DELETE_PHONE_SUCCESS,
  UPDATE_PHONE_ERROR,
  UPDATE_PHONE_LOADING,
  UPDATE_PHONE_SUCCESS,
  ADD_PHONE_ERROR,
  ADD_PHONE_LOADING,
  ADD_PHONE_SUCCESS,
} from "../../actions/phonesActions";

const initialState = {
  loadingGetPhones: false,
  errorGetPhones: false,
  loadingDeletePhone: false,
  errorDeletePhone: false,
  loadingUpdatePhone: false,
  errorUpdatePhone: false,
  errorAddPhone: false,
  loadingAddPhone: false,
  phones: [],
};

const PhoneReducer = (state = initialState, action: any) => {
  // should type the action
  switch (action.type) {
    case GET_PHONES_LOADING:
      return {
        loadingGetPhones: true,
      };
    case GET_PHONES_ERROR:
      return {
        errorGetPhones: true,
        loadingGetPhones: false,
      };
    case GET_PHONES_SUCCESS:
      return {
        loadingGetPhones: false,
        phones: action.data,
      };
    case UPDATE_PHONE_LOADING:
      return {
        loadingUpdatePhones: true,
      };
    case UPDATE_PHONE_ERROR:
      return {
        errorUpdatePhone: true,
        loadingUpdatePhone: false,
      };
    case UPDATE_PHONE_SUCCESS:
      return {
        loadingUpdatePhone: false,
      };
    case ADD_PHONE_LOADING:
      return {
        loadingAddPhones: true,
      };
    case ADD_PHONE_ERROR:
      return {
        errorAddPhone: true,
        loadingAddPhone: false,
      };
    case ADD_PHONE_SUCCESS:
      return {
        loadingAddPhone: false,
      };
    case DELETE_PHONE_LOADING:
      return {
        loadingDeletePhone: true,
      };
    case DELETE_PHONE_ERROR:
      return {
        errorDeletePhone: true,
        loadingDeletePhone: false,
      };
    case DELETE_PHONE_SUCCESS:
      return {
        loadingDeletePhone: false,
      };
    default:
      return { ...state };
  }
};

export default PhoneReducer;
