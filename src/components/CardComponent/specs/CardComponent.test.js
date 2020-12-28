import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import { CardComponent } from "../CardComponent";

import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { PhonesList } from "../../../fixtures/phoneFixtures";

describe("Testing cardComponent", () => {
  const onDeletemock = jest.fn();
  const onEditmock = jest.fn();
  const onMoreInfosmock = jest.fn();

  let cardComponent;

  beforeEach(() => {
    cardComponent = shallow(
      <CardComponent
        products={PhonesList}
        onDelete={onDeletemock}
        onEdit={onEditmock}
        onMoreInfo={onMoreInfosmock}
      />
    );
  });

  it("CardComponent should render", () => {
    expect(cardComponent).toMatchSnapshot();
  }),
    it("Should call onDelete function when click in delete icon", () => {
      const deleteButton = cardComponent.find(IconButton).at(0);
      deleteButton.simulate("click");
      expect(onDeletemock).toHaveBeenCalledTimes(1);
    });
  it("Should call onEdit function when click in edit icon", () => {
    const editButton = cardComponent.find(IconButton).at(1);
    editButton.simulate("click");
    expect(onEditmock).toHaveBeenCalledTimes(1);
  });
  it("Should call moreInfo function when click in more info button", () => {
    // improve this test
    // const history = createMemoryHistory();
    // history.push = jest.fn();
    // const moreInfos = cardComponent.find(Link);
    // moreInfos.simulate("click");
    // expect(history.push).toHaveBeenCalledWith("/");
  });
});
