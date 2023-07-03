export default function createIteratorObject(report) {
  const employees = [];
  const departments = [];
  for (const department of Object.values(report)) {
    departments.push(department);
    for (const employee of Object.values(department)) {
      employees.push(...employee);
    }
  }
  return employees;
}
