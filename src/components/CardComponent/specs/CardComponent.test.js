import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import { CardComponent } from "../CardComponent";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { iphoneImage } from "../../../assets/images/Iphone7.jpg";

const mockedProduct = [
  {
    id: 0,
    name: "iPhone 7",
    manufacturer: "Apple",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: iphoneImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
];

describe("Testing cardComponent", () => {
  const onDeletemock = jest.fn();
  const onEditmock = jest.fn();
  const onMoreInfosmock = jest.fn();

  let cardComponent;

  beforeEach(() => {
    cardComponent = shallow(
      <CardComponent
        products={mockedProduct}
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
    const moreInfos = cardComponent.find(Button);
    moreInfos.simulate("click");
    expect(onMoreInfosmock).toHaveBeenCalledTimes(1);
  });
});
