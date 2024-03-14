import express, { Request, Response } from 'express'
import multer from 'multer';
import { findNotifications, upsertNotification } from '../services/notifications';


const studentRouter = express.Router();

studentRouter.use(express.json());
studentRouter.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();

const size = 150 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

studentRouter.get('/find', upload.single('file'), async (req: Request, res: Response) => {
  const loginResult = await findNotifications()
  res.send(loginResult)
});

studentRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertNotification(req.body)
  res.send(upsertResult)
})

export default studentRouter;


