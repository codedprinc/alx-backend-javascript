/* eslint func-names: ["error", "as-needed"] */
/* eslint object-shorthand: ["error", "never"] */
export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,

    getNumberOfDepartments: function (list) {
      return Object.keys(list).length;
    },
  };

  return reportObject;
}
