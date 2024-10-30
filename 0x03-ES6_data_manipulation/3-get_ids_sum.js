export default function getStudentIdsSum(studentList) {
  const sumOfIds = studentList.reduce((accum, currentValue) => accum + currentValue.id, 0);

  return sumOfIds;
}
