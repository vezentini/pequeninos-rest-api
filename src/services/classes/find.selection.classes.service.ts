import { Classes, IClassesSelectionList } from '../../entities/interfaces';
import IClassModal from '../../entities/interfaces/class.interface';

const findClasses = async (): Promise<IClassesSelectionList> => {
  const accountDb = await Classes.find();

  const classes = accountDb.map((account: IClassModal) => (
    `${account.id} - ${account.name}`))

  return { classes }
}

export default findClasses;
