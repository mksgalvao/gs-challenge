import reducer from "../phonesReducer";
import * as actions from "../../../actions/phonesActions";

import expect from "expect";
import phones from "../../../fixtures/phoneFixtures";

const initialState = { loading: false, error: false, phones: [] };

describe("phones reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_PHONES_LOADING", () => {
    const startAction = {
      type: actions.GET_PHONES_LOADING,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, startAction)).toEqual({ loading: true });
  });

  it("should handle GET_PHONES_SUCCESS", () => {
    const successAction = {
      type: actions.GET_PHONES_SUCCESS,
      phones: phones, // important to pass correct payload, that's what the tests are for ;)
    };
    expect(reducer({}, successAction)).toEqual({
      loading: false,
      phones: phones,
    });
  });

  it("should handle GET_PHONES_ERROR", () => {
    const failAction = {
      type: actions.GET_PHONES_ERROR,
      error: { success: false },
    };
    expect(reducer({}, failAction)).toEqual({ error: true, loading: false });
  });
});
