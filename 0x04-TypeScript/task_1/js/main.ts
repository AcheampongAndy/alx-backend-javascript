// Define a Teacher interface
interface Teacher {
  readonly firstName: string;    // Readonly, can only be set during initialization
  readonly lastName: string;     // Readonly, can only be set during initialization
  fullTimeEmployee: boolean;     // Must be defined
  location: string;              // Must be defined
  yearsOfExperience?: number;    // Optional
  [key: string]: any;            // Allows any additional property like contract
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Output should be:
// {
//   contract: false,
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London'
// }

