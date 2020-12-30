import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import InputBase from "@material-ui/core/InputBase";

import { PhonesList } from "../../../fixtures/phoneFixtures";

import { PhonesWrapper } from "../PhonesWrapper";
import { CardComponent } from "../../CardComponent/CardComponent";
const mockStore = configureMockStore([thunk]);

describe("Testing cardComponent", () => {
  let phonesWrapper;

  const store = mockStore({
    phones: { phones: PhonesList, loading: false, error: false },
  });

  beforeEach(() => {
    phonesWrapper = shallow(
      <Provider store={store}>
        <PhonesWrapper />
      </Provider>
    );
  });

  it("Phones Wrapper should render", () => {
    expect(phonesWrapper).toMatchSnapshot();
  }),
    it("Should call on search function when onChange search input", () => {
      const searchInput = phonesWrapper.find(InputBase);
      const cards = phonesWrapper.find(CardComponent);
      //expect(cards).toHaveLength(5);

      searchInput.simulate("change", { target: { value: "iphone" } });
      //expect(cards).toHaveLength(1);
    });
});
