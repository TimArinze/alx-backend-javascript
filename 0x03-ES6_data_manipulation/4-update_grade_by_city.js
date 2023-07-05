/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter((value) => value.location === city);
  const mapped = filtered.map((value) => {
    const find1 = newGrades.find((element) => element.studentId === value.id);
    if (find1) {
      value.grade = find1.grade;
    } else {
      value.grade = 'N/A';
    }
    return value;
  });
  return mapped;
}
