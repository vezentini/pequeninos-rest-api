import { Summaries } from "../../entities/interfaces";


const updateStudentSummaries = async (studentId: string, newStudentId: string): Promise<void> => {
  const summariesDb = await Summaries.updateMany({ studentId }, { $set: { studentId: newStudentId } });

  console.log(summariesDb);

  return;
}

export default updateStudentSummaries;
