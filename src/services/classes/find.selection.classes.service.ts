import { Classes, IClassesSelectionList } from '../../entities/interfaces';
import IClassModal from '../../entities/interfaces/class.interface';

const findClasses = async (): Promise<IClassesSelectionList> => {
  const classesDb = await Classes.find();

  const classes = classesDb.map((account: IClassModal) => (
    `${account.id} - ${account.name}`))

  return { classes }
}

export default findClasses;
