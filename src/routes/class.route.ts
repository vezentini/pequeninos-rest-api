import express, { Request, Response } from 'express'
import multer from 'multer';
import { pathOr } from 'ramda';
import { findClasses, upsertClass } from '../services/classes';


const classesRouter = express.Router();

classesRouter.use(express.json());
classesRouter.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();

const size = 150 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

classesRouter.get('/find', upload.single('file'), async (req: Request, res: Response) => {
  const loginResult = await findClasses()
  res.send(loginResult)
});

classesRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertClass(req.body)
  res.send(upsertResult)
})

export default classesRouter;


