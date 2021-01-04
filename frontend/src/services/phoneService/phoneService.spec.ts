import { Pact } from "@pact-foundation/pact";
import { pactWith } from "jest-pact";
import { PhoneService } from "./phoneService";
import { getPhonesValidInteraction } from "../../fixtures/phoneFixtures";

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
  }
);
