export default function getListStudentIds(thisArray) {
  if (!(Array.isArray(thisArray))) {
    return [];
  }
  const mapped = thisArray.map((value) => value.id);
  return mapped;
}
