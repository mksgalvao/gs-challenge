import { InteractionObject } from "@pact-foundation/pact";
import iphoneImage from "../assets/images/Iphone7.jpg";
import galaxyImage from "../assets/images/Galaxy7.jpg";

export const iPhone7 = {
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
};

export const Galaxy7 = {
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
};

export const PhonesList = [
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

export const getPhonesValidInteraction: InteractionObject = {
  state: "2 phones exists",
  uponReceiving: "A get request to get a list of phones",
  willRespondWith: {
    status: 200,
    body: [iPhone7, Galaxy7],
    headers: {
      "Content-Type": "application/json",
    },
  },
  withRequest: {
    method: "GET",
    path: "/phones",
  },
};
