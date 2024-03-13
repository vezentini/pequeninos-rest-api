import express, { Request, Response } from 'express'
import multer from 'multer';
import { pathOr } from 'ramda';
import { findClasses, upsertClass } from '../services/classes';


const classRouter = express.Router();

classRouter.use(express.json());
classRouter.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();

const size = 150 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

classRouter.get('/find', upload.single('file'), async (req: Request, res: Response) => {
  const loginResult = await findClasses()
  res.send(loginResult)
});

classRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertClass(req.body)
  res.send(upsertResult)
})

export default classRouter;


