import { Students } from "../../entities/interfaces";


const updateClassStudents = async (classId: string, newClassId: string): Promise<void> => {
  await Students.updateMany({ classId }, { $set: { classId: newClassId } });

  return;
}

export default updateClassStudents;
