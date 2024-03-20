export const mapNewStudentsListIds = (studentIds: String[], oldId: string, newId: string) => {
  return studentIds.map((id) => oldId === id ? newId : id);
};

export default mapNewStudentsListIds;
