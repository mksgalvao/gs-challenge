import axios, { AxiosPromise } from "axios";
import { Phone } from "./phone";

export class PhoneService {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public getPhones = (): AxiosPromise<Phone[]> => {
    return axios.get(`${this.url}/phones`, {
      headers: { Accept: "application/json" },
    });
  };
}
