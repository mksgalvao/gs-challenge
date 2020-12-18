import React from "react";
import { CardComponent } from "./CardComponent/CardComponent";
import iphoneImage from "../assets/images/Iphone7.jpg";
import galaxyImage from "../assets/images/Galaxy7.jpg";

const phones = [
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
  {
    id: 1,
    name: "Galaxy 7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: galaxyImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "Galaxy 7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: iphoneImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "Galaxy 7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: iphoneImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "Galaxy 7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: iphoneImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "Galaxy 7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: iphoneImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "Galaxy 7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: iphoneImage,
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
];

export const PhonesWrapper = (props: any) => {
  // should be replaced for a card props type
  return (
    <div>
      <CardComponent products={phones} />
    </div>
  );
};
