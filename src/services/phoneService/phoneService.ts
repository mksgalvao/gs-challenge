import axios, { AxiosPromise } from "axios";
import { Phone } from "./phone";
import { PhoneType } from "../../fixtures/phoneFixtures";

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

  public deletePhone = (phoneId: number): AxiosPromise<Phone[]> => {
    return axios.delete(`${this.url}/phones`, {
      headers: { Accept: "application/json" },
      data: phoneId,
    });
  };

  public addPhone = (phone: PhoneType): AxiosPromise<Phone[]> => {
    return axios.post(`${this.url}/phones`, {
      headers: { Accept: "application/json" },
      data: phone,
    });
  };

  public updatePhone = (phone: PhoneType): AxiosPromise<Phone[]> => {
    return axios.put(`${this.url}/phones`, {
      headers: { Accept: "application/json" },
      data: phone,
    });
  };
}
