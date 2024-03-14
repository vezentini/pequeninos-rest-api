import { Classes, IClassesList } from '../../entities/interfaces';
import IClassModal from '../../entities/interfaces/class.interface';

const findClasses = async (): Promise<IClassesList> => {
  const classesDb = await Classes.find();

  const classes = classesDb.map((classObj: IClassModal) => ({
    id: classObj.id,
    name: classObj.name,
  }))

  return { classes }
}

export default findClasses;
