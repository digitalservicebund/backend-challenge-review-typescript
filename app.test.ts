import { expect, test, describe } from "vitest";
import "./app";

// Currently we only test the handler, it would also make sense to test
// the different services separately
describe("The app", () => {
  describe("GET /", () => {
    test("should show webpage with headline and the data table", async () => {
      const response: Response = await fetch("http://localhost:8080/");

      expect(response.status).toBe(200);

      const html = await response.text();
      expect(html).toContain(
        "Number of Datasets Published by Federal Ministries"
      );
      expect(html).toContain(
        '<table class="w-full table-auto border-collapse">'
      );
    });
  });
});
