// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // Optional property
    location: string;
    [key: string]: any;  // Index signature to allow additional properties
  }
  
  // Initialize a Teacher object
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,  // Additional property
  };
  
  console.log(teacher3);

  
  // Define the Directors interface, extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;  // Required attribute for Directors
  }
  
  // Initialize a Directors object
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);


  // Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Test the function
  console.log(printTeacher("John", "Doe"));  // Output: J. Doe

  
  // Interface for the class constructor
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Interface for the StudentClass
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class implementation
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Test the class
  const student1 = new StudentClass({ firstName: "Jane", lastName: "Doe" });
  console.log(student1.workOnHomework()); // Output: Currently working
  console.log(student1.displayName());     // Output: Jane
  