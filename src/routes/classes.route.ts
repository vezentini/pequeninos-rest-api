import express, { Request, Response } from 'express'
import multer from 'multer';
import { deleteClass, findClasses, findSelectionClasses, upsertClass } from '../services/classes';


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
  const classesResult = await findClasses()
  res.send(classesResult)
});

classesRouter.get('/findSelection', upload.single('file'), async (req: Request, res: Response) => {
  const studentsResult = await findSelectionClasses()
  res.send(studentsResult)
});

classesRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertClass(req.body)
  res.send(upsertResult)
})

classesRouter.post('/delete', async (req: Request, res: Response) => {
  const deleteResult = await deleteClass(req.body)
  res.send(deleteResult)
})

export default classesRouter;


