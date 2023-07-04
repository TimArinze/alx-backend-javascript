export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const employee of Object.values(reportWithIterator)) {
    employees.push(employee);
  }
  return employees.join(' | ');
}
