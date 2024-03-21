import { Summaries } from "../../entities/interfaces";


const updateStudentSummaries = async (studentId: string, newStudentId: string): Promise<void> => {
  await Summaries.updateMany({ studentId }, { $set: { studentId: newStudentId } });

  return;
}

export default updateStudentSummaries;
