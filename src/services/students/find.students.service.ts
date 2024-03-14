import { Students, IStudentsList } from '../../entities/interfaces';
import IStudentModal from '../../entities/interfaces/student.interface';

const findStudents = async (): Promise<IStudentsList> => {
  const studentsDb = await Students.find();

  const students = studentsDb.map((student: IStudentModal) => ({
    id: student.id,
    name: student.name,
    gender: student.gender,
    classId: student.classId
  }))

  return { students }
}

export default findStudents;
