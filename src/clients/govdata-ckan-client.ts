import axios from "axios";
import { OrganizationData } from "../services/govdata-ckan-service";
// It could make sense to have different entities to model the data
// fetched from the API, and an Organization as we treat them in the
// rest of our logic. That way we have less to update if the API changes.
// What do you think?

const govDataAllOrganizationsURL =
  "https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true&include_dataset_count=true";

export interface GovDataCkanAllOrganizationResult {
  success: boolean;
  result: OrganizationData[];
}

export async function fetchAllOrganizationData(): Promise<GovDataCkanAllOrganizationResult> {
  const response = await axios.get(govDataAllOrganizationsURL);

  return {
    success: response.data.success,
    result: response.data.result,
  };
}
