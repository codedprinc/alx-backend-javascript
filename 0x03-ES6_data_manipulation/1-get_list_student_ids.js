export default function getListStudentIds(listOfStudents) {
  if (!(listOfStudents instanceof Array)) {
    return [];
  }
  const ids = listOfStudents.map((student) => student.id);

  return ids;
}
