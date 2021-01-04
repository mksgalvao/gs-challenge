import reducer from "../phonesReducer";
import * as actions from "../../../actions/phonesActions";

import expect from "expect";
import { iPhone7, PhonesList } from "../../../fixtures/phoneFixtures";

const initialState = {
  loadingGetPhones: false,
  errorGetPhones: false,
  phones: [],
  errorAddPhone: false,
  errorDeletePhone: false,
  errorGetPhones: false,
  errorUpdatePhone: false,
  loadingAddPhone: false,
  loadingDeletePhone: false,
  loadingGetPhones: false,
  loadingUpdatePhone: false,
};

describe("phones reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_PHONES_LOADING", () => {
    const startAction = {
      type: actions.GET_PHONES_LOADING,
    };
    expect(reducer({}, startAction)).toEqual({ loadingGetPhones: true });
  });

  it("should handle GET_PHONES_SUCCESS", () => {
    const successAction = {
      type: actions.GET_PHONES_SUCCESS,
      data: PhonesList,
    };
    expect(reducer({}, successAction)).toEqual({
      loadingGetPhones: false,
      phones: PhonesList,
    });
  });

  it("should handle GET_PHONES_ERROR", () => {
    const failAction = {
      type: actions.GET_PHONES_ERROR,
      error: { success: false },
    };
    expect(reducer({}, failAction)).toEqual({
      errorGetPhones: true,
      loadingGetPhones: false,
    });
  });
});
