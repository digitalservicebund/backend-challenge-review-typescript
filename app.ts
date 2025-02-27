import departmentList from "./src/data/departments.json";
import {
  getDatasetCounts,
  sortDatasetCounts,
} from "./src/services/govdata-ckan-service";
import { renderDepartmentDatasetCounts } from "./src/services/rendering-service";
import express from "express";
import { fetchAllOrganizationData } from "./src/clients/govdata-ckan-client";

const app = express();

app.get("/", async function (req, res) {
  const organizations = (await fetchAllOrganizationData()).result;
  const allMinistriesDatasetsCounts = await getDatasetCounts(
    departmentList,
    organizations
  );

  const datasetsCountsSortedDescending = sortDatasetCounts(
    allMinistriesDatasetsCounts
  );

  const htmlString = renderDepartmentDatasetCounts(
    datasetsCountsSortedDescending
  );

  res.send(htmlString);
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});

export default app;
