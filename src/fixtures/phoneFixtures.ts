import { InteractionObject } from "@pact-foundation/pact";

export interface PhoneType {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: number;
}

export const iPhone7: PhoneType = {
  id: 0,
  name: "iPhone 7",
  manufacturer: "Apple",
  description: "lorem ipsum dolor sit amet consectetur.",
  color: "black",
  price: 769,
  imageFileName:
    "https://benotac.es/wp-content/uploads/2018/06/iPhone7-Negro-Mate-Angulos.jpg",
  screen: "4,7 inch IPS",
  processor: "A10 Fusion",
  ram: 2,
};

export const Galaxy7: PhoneType = {
  id: 1,
  name: "Galaxy 7",
  manufacturer: "Samsung",
  description: "lorem ipsum dolor sit amet consectetur.",
  color: "black",
  price: 769,
  imageFileName: "https://images.mobilefun.co.uk/graphics/450pixelp/57143.jpg",
  screen: "4,7 inch IPS",
  processor: "A10 Fusion",
  ram: 2,
};

export const PhonesList: PhoneType[] = [
  {
    id: 0,
    name: "iPhone 7",
    manufacturer: "Apple",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName:
      "https://benotac.es/wp-content/uploads/2018/06/iPhone7-Negro-Mate-Angulos.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 2,
    name: "Galaxy 7",
    manufacturer: "Samsung",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName:
      "https://images.mobilefun.co.uk/graphics/450pixelp/57143.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 3,
    name: "Redmi note 9",
    manufacturer: "Xiaomi",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName:
      "https://i.blogs.es/a94951/xiaomi-redmi-note-9-pro-00-04/1366_2000.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 4,
    name: "Moto g7",
    manufacturer: "Motorola",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: "https://static.kemikcdn.com/2019/11/G7x2.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 5,
    name: "Asus Zenphone 5",
    manufacturer: "asus",
    description: "lorem ipsum dolor sit amet consectetur.",
    color: "black",
    price: 769,
    imageFileName: "https://i.zst.com.br/thumbs/12/34/37/602513659.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
];

export const getPhonesValidInteraction: InteractionObject = {
  state: "a phone list exists",
  uponReceiving: "A get request to get a list of phones",
  willRespondWith: {
    status: 200,
    body: PhonesList,
    headers: {
      "Content-Type": "application/json",
    },
  },
  withRequest: {
    method: "GET",
    path: "/phones",
  },
};
