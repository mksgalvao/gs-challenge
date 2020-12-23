import {
  GET_PHONES_ERROR,
  GET_PHONES_SUCCESS,
  GET_PHONES_LOADING,
} from "../../actions/phonesActions";

const initialState = {
  loading: false,
  error: false,
  success: [],
};

const PhoneReducer = (state = initialState, action: any) => {
  // should type the action
  switch (action.type) {
    case GET_PHONES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PHONES_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_PHONES_SUCCESS:
      return {
        ...state,
        loading: false,
        phones: action.data,
      };
    default:
      return { ...state };
  }
};

export default PhoneReducer;
