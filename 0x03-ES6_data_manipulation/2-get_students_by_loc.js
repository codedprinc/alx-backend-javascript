export default function getStudentsByLocation(studentList, location) {
  if (!(studentList instanceof Array)) {
    return [];
  }
  const studentsInLocation = studentList.filter((student) => student.location === location);

  return studentsInLocation;
}
