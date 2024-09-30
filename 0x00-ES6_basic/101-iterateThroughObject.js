export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  
  // Iterate through the iterator to gather employee names
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the employee names with ' | ' separator
  return employees.join(' | ');
}
