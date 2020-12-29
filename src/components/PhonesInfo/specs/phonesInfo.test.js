import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";

import { PhonesList } from "../../../fixtures/phoneFixtures";
import { PhonesInfo } from "../PhonesInfo";

describe("Testing PhonesInfo", () => {
  let phonesInfo;

  const mockedPhones = { state: { phone: PhonesList } };

  beforeEach(() => {
    phonesInfo = shallow(<PhonesInfo location={mockedPhones} />);
  });

  it("phonesInfo should render", () => {
    expect(phonesInfo).toMatchSnapshot();
  });
});
