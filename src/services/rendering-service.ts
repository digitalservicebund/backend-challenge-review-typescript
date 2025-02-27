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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body style="padding: 3em;">
    <div class="container">
        <h1 style="text-align: center;">
            Number of Datasets Published by Federal Ministries on
            <a href="https://www.govdata.de/" target="_blank">Govdata</a>
        </h1>
        <br>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Federal Ministry</th>
                <th scope="col">Datasets</th>
            </tr>
            </thead>
            <tbody>
            <% departmentDatasetCounts.forEach((departmentDataset) => { %>
                <tr class="department">
                    <td th:text="<%=departmentDataset.departmentName%>"><%=departmentDataset.departmentName%></td>
                    <td th:text="<%=departmentDataset.numberOfDatasets%>"><%=departmentDataset.numberOfDatasets%></td>
                </tr>
            <%}) %>
            </tbody>
        </table>
    </div>
</body>
</html>`;
