export default function updateStudentGradeByCity(listOfStudents, city, grades) {
  if (!(listOfStudents instanceof Array)) {
    return [];
  }
  const studGrade = listOfStudents.filter((stud) => stud.location === city).map((student) => {
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].studentId === student.id) {
        student.grade = grades[i].grade;
        break;
      }
      student.grade = 'N/A';
    }
    return student;
  });

  return studGrade;
}
