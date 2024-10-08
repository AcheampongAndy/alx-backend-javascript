export default function updateStudentGradeByCity(students, city, newGrade) {
	const filteredStudents = students.filter(({ location }) => location === city);

	const updatedStudent = filteredStudents.map((student) => {
		const studentGrades = newGrade.filter((grade) => grade.studentId === student.id);
		const newStudent = student;
		// check if student has a grade, if not set NA as value
		if (studentGrade.length > 0) {
			newStudent.grade = studentGrades[0].grade;
		} else {
			newStudent.grade = 'N/A';
		}
		return newStudent;
	});
	return studentGrades;
}
