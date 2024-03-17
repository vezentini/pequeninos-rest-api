import express, { Request, Response } from 'express'
import multer from 'multer';
import { findNotifications, upsertNotification } from '../services/notifications';
import { pathOr } from 'ramda';
import { ProfileTypes } from '../entities/enums';


const notificationsRouter = express.Router();

notificationsRouter.use(express.json());
notificationsRouter.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();

const size = 5000 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

notificationsRouter.get('/find', upload.single('file'), async (req: Request, res: Response) => {
  const accountId = pathOr(0, ['accountId'], req.query) as number;
  const profile = pathOr(ProfileTypes.ADMIN, ['profile'], req.query);

  const loginResult = await findNotifications({ accountId, profile })
  res.send(loginResult)
});

notificationsRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertNotification(req.body)
  res.send(upsertResult)
})

export default notificationsRouter;


