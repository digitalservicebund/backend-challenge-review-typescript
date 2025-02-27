import axios from "axios";
import { OrganizationData } from "../services/govdata-ckan-service";

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
