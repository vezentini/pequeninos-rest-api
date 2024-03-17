import { ProfileTypes } from "../../entities/enums";
import { CommonFilterInput } from "../../entities/inputs";
import { INotificationsList, Notifications } from "../../entities/interfaces";
import INotificationModal from "../../entities/interfaces/notification.interface";
import { mapFilterStudents } from "../accounts";


const findNotifications = async (input: CommonFilterInput): Promise<INotificationsList> => {
  let filter = {};
  if (input.profile === ProfileTypes.PARENT) {
    filter = await mapFilterStudents(input)
  }

  const notificationsDb = await Notifications.find();

  const notifications = notificationsDb.map((notification: INotificationModal) => {
    return ({
      id: notification.id,
      title: notification.title,
      description: notification.description,
      photo: notification.photo
    });
  })

  return { notifications }
}

export default findNotifications;
