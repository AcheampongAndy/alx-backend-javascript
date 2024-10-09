interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "owura",
	lastName: "kwaku",
	age: 25,
	location: "Kumasi"
};

const student2: Student = {
	firstName: "adwoa",
	lastName: "ahenkan",
	age: 45,
	location: "Kumasi"
}

// Create an array with the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');

// Create table headers
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();
headerCell1.innerText = "First Name";
headerCell2.innerText = "Location";

// Add each student to the table
studentsList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
