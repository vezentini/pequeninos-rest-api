import { NotificationInput } from '../../entities/inputs';
import { Notifications } from '../../entities/interfaces';
import { generateNumberId } from '../../helper';

const upsertNotification = async (input: NotificationInput): Promise<Boolean> => {
  let upsertObject = { ...input };
  if (input.id === 0) {
    upsertObject.id = generateNumberId();
  }

  await Notifications.updateOne(
    { id: upsertObject.id },
    upsertObject,
    { upsert: true },
  );

  return true;
}

export default upsertNotification;
