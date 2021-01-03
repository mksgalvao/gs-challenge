import { Pact } from "@pact-foundation/pact";
import { pactWith } from "jest-pact";
import { PhoneService } from "./phoneService";
import {
  iPhone7,
  Galaxy7,
  getPhonesValidInteraction,
} from "../../fixtures/phoneFixtures";

pactWith(
  { consumer: "consumer", provider: "provider" },
  async (provider: Pact) => {
    const client = () => {
      const url = `${provider.mockService.baseUrl}`;
      return new PhoneService(url);
    };
    test("should accept a valid get request to get /phones", async () => {
      await provider.addInteraction(getPhonesValidInteraction);

      await client()
        .getPhones()
        .then((result) => {
          expect(result.status).toEqual(200);
          expect(result.data).toHaveLength(5);
        });
    });

    test("should accept a valid post request to add a phone", async () => {
      await provider.addInteraction(getPhonesValidInteraction);

      await client()
        .addPhone(Galaxy7)
        .then((result) => {
          expect(result.status).toEqual(200);
          expect(result.data).toHaveLength(5);
        });
    });

    test("should accept a valid put request to update a phone", async () => {
      await provider.addInteraction(getPhonesValidInteraction);

      await client()
        .updatePhone(Galaxy7)
        .then((result) => {
          expect(result.status).toEqual(200);
          expect(result.data).toHaveLength(5);
        });
    });

    test("should accept a valid delete request to delete a phone", async () => {
      await provider.addInteraction(getPhonesValidInteraction);

      await client()
        .deletePhone(Galaxy7.id)
        .then((result) => {
          expect(result.status).toEqual(200);
          expect(result.data).toHaveLength(5);
        });
    });
  }
);
