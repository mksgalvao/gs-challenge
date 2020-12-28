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
          expect(result.data).toHaveLength(2);
          expect(result.data[0]).toEqual(iPhone7);
          expect(result.data[1]).toEqual(Galaxy7);
        });
    });
  }
);
