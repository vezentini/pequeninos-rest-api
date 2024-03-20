import { Students } from "../../entities/interfaces";


const updateClassStudents = async (classId: string, newClassId: string): Promise<void> => {
  const studentsDb = await Students.updateMany({ classId }, { $set: { classId: newClassId } });

  console.log(studentsDb);

  return;
}

export default updateClassStudents;
