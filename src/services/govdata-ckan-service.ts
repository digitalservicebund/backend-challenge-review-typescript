import {
  DepartmentList,
  getMinistriesNames as getDepartmentNames,
  getSubordinates,
} from "./departments-service";

export type OrganizationData = {
  title: string;
  package_count: number;
};

export interface DepartmentDatasetCount {
  departmentName: string;
  numberOfDatasets: number;
}

export function getDatasetCounts(
  departmentList: DepartmentList,
  organizationsData: OrganizationData[]
) {
  const departments = getDepartmentNames(departmentList);
  const result: DepartmentDatasetCount[] = [];

  departments.forEach((department) => {
    const subordinates = getSubordinates(departmentList, department);
    result.push({
      departmentName: department,
      numberOfDatasets: calculateDatasetCountsPerDepartment(
        organizationsData,
        department,
        subordinates
      ),
    });
  });

  return result;
}

function calculateDatasetCountsPerDepartment(
  organizationsData: OrganizationData[],
  departmentName: string,
  subordinates: string[]
) {
  let result = getDatasetCountForMinistry(organizationsData, departmentName);
  subordinates.forEach((subordinate) => {
    result += getDatasetCountForMinistry(organizationsData, subordinate);
  });

  return result;
}

function getDatasetCountForMinistry(
  organizationData: OrganizationData[],
  ministry: string
) {
  return (
    organizationData.find((organization) => organization.title == ministry)
      ?.package_count || 0
  );
}

export function sortDatasetCounts(
  departmentDatasetsCounts: DepartmentDatasetCount[]
): DepartmentDatasetCount[] {
  const sorted = departmentDatasetsCounts.sort(
    (a, b) => b.numberOfDatasets - a.numberOfDatasets
  );
  return sorted;
}
