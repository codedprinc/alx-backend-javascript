// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London"
  };
  
  // Create an array named studentsList containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    
    // Create header cells
    const firstNameHeader = headerRow.insertCell(0);
    firstNameHeader.textContent = 'First Name';
    const locationHeader = headerRow.insertCell(1);
    locationHeader.textContent = 'Location';
  
    // Create rows for each student
    students.forEach((student) => {
      const row = table.insertRow();
      const firstNameCell = row.insertCell(0);
      firstNameCell.textContent = student.firstName;
      const locationCell = row.insertCell(1);
      locationCell.textContent = student.location;
    });
  
    // Append the table to the body
    document.body.appendChild(table);
  }
  
  // Render the table when the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    renderTable(studentsList);
  });