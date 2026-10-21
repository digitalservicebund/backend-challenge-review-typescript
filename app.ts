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
  // There's a lot of logic in this handler. I think it'd be worth
  // bundling the logic into a separate class/service that can be unit tested.

  const organizations = (await fetchAllOrganizationData()).result;
  // We fetch organization data from the API every time a request is made.
  // Is this necessary? Avoiding it could improve performance and limit
  // issues in case the API goes down

  const allMinistriesDatasetsCounts = await getDatasetCounts(
    departmentList,
    organizations
  );

  const datasetsCountsSortedDescending = sortDatasetCounts(
    allMinistriesDatasetsCounts
  );

  // It looks like express supports defining views separately
  // If so, it'd be better to rely on it, rather than defining our
  // own rendering service (i.e. use res.render + a view in a .ejs file)
  // That way we can switch change templating engine more easily
  const htmlString = renderDepartmentDatasetCounts(
    datasetsCountsSortedDescending
  );

  res.send(htmlString);
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});

export default app;
