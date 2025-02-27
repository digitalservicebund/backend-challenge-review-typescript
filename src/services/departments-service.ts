type Subordinate = {
  name: string;
};

export interface DepartmentList {
  departments: {
    name: string;
    subordinates?: Subordinate[];
  }[];
}

export function getMinistriesNames(departmentList: DepartmentList): string[] {
  const names = departmentList.departments.map((department) => department.name);
  return names;
}

export function getSubordinates(
  departmentList: DepartmentList,
  ministryName: string
): string[] {
  const subordinates = departmentList.departments.find(
    (department) => department.name == ministryName
  )?.subordinates;
  const subordinatesName = subordinates?.map((subordinate) => subordinate.name);
  return subordinatesName || [];
}
