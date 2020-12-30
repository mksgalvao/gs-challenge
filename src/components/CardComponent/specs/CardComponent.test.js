import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import { CardComponent } from "../CardComponent";
import Card from "@material-ui/core/Card";

import IconButton from "@material-ui/core/IconButton";
import { iPhone7 } from "../../../fixtures/phoneFixtures";

describe("Testing cardComponent", () => {
  const onDeleteMock = jest.fn();
  const onEditMock = jest.fn();
  const onCardClickMock = jest.fn();
  let cardComponent;

  beforeEach(() => {
    cardComponent = shallow(
      <CardComponent
        phone={iPhone7}
        onDelete={onDeleteMock}
        onEdit={onEditMock}
        onCardClick={onCardClickMock}
      />
    );
  });

  it("CardComponent should render", () => {
    expect(cardComponent).toMatchSnapshot();
  }),
    it("Should call onDelete function when click in delete icon", () => {
      const deleteButton = cardComponent.find(IconButton).at(0);
      deleteButton.simulate("click");
      expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });
  it("Should call onEdit function when click in edit icon", () => {
    const editButton = cardComponent.find(IconButton).at(1);
    editButton.simulate("click");
    expect(onEditMock).toHaveBeenCalledTimes(1);
  });

  it("Should call onCardClick function when click in card", () => {
    const card = cardComponent.find(Card);
    card.simulate("click", {});
    expect(onCardClickMock).toHaveBeenCalledWith(iPhone7);
    expect(onCardClickMock).toHaveBeenCalledTimes(1);
  });
});
