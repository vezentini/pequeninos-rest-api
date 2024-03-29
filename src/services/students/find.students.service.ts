import { isEmpty } from 'ramda';
import { ProfileTypes } from '../../entities/enums';
import { CommonFilterInput } from '../../entities/inputs';
import { Students, IStudentsList } from '../../entities/interfaces';
import IStudentModal from '../../entities/interfaces/student.interface';
import { mapFilterStudents } from '../accounts';

const findStudents = async (input: CommonFilterInput): Promise<IStudentsList> => {
  let filter = {};
  if (input.profile === ProfileTypes.PARENTAL) {
    const listStudentsIds = await mapFilterStudents(input, true)

    if (isEmpty(listStudentsIds)) return { students: [] }

    filter = { id: { $in: listStudentsIds } }
  }

  const studentsDb = await Students.find({ ...filter });

  const students = studentsDb.map((student: IStudentModal) => ({
    id: student.id,
    name: student.name,
    gender: student.gender,
    classId: student.classId
  }))

  return { students }
}

export default findStudents;
