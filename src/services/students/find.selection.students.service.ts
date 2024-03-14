import { Students, IStudentsSelectionList } from '../../entities/interfaces';
import IStudentModal from '../../entities/interfaces/class.interface';

const findSelectionStudentes = async (): Promise<IStudentsSelectionList> => {
  const studentsDb = await Students.find();

  const students = studentsDb.map((student: IStudentModal) => (
    `${student.id} - ${student.name}`))

  return { students: students }
}

export default findSelectionStudentes;
