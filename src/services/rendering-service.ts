import { render } from "ejs";
import { DepartmentDatasetCount } from "./govdata-ckan-service";

export function renderDepartmentDatasetCounts(
  departmentDatasetCounts: DepartmentDatasetCount[]
): string {
  const html = render(htmlTemplate, { departmentDatasetCounts });

  return html;
}

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Govdata Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-12">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-center text-5xl font-semibold">
            Number of Datasets Published by Federal Ministries on
            <a href="https://www.govdata.de/" target="_blank" class="text-blue-600 hover:underline">Govdata</a>
        </h1>
        <br>
        <table class="w-full table-auto border-collapse">
            <thead class="border-t border-b-2">
                <tr>
                    <th class="px-4 py-3 text-left">Federal Ministry</th>
                    <th class="px-4 py-3 text-left">Datasets</th>
                </tr>
            </thead>
            <tbody>
                <% departmentDatasetCounts.forEach((departmentDataset) => { %>
                    <tr class="hover:bg-gray-50">
                        <td th:text="<%=departmentDataset.departmentName%>" class="px-4 py-3 border-t"><%=departmentDataset.departmentName%></td>
                        <td th:text="<%=departmentDataset.numberOfDatasets%>" class="px-4 py-3 border-t"><%=departmentDataset.numberOfDatasets%></td>
                    </tr>
                <% }) %>
            </tbody>
        </table>
    </div>
</body>
</html>
`;
