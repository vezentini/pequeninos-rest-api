import express, { Request, Response } from 'express'
import multer from 'multer';
import { findSelectionStudentes, findStudents, upsertStudent, deleteStudent } from '../services/students';
import { pathOr } from 'ramda';
import { ProfileTypes } from '../entities/enums';


const studentsRouter = express.Router();

studentsRouter.use(express.json());
studentsRouter.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();

const size = 150 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

studentsRouter.get('/find', upload.single('file'), async (req: Request, res: Response) => {
  const accountId = pathOr(0, ['accountId'], req.query) as number;
  const profile = pathOr(ProfileTypes.ADMIN, ['profile'], req.query);

  const studentsResult = await findStudents({ accountId, profile })
  res.send(studentsResult)
});

studentsRouter.get('/findSelection', upload.single('file'), async (req: Request, res: Response) => {
  const studentsResult = await findSelectionStudentes()
  res.send(studentsResult)
});

studentsRouter.delete('/delete', upload.single('file'), async (req: Request, res: Response) => {
  const id = pathOr(0, ['id'], req.query);
  const loginResult = await deleteStudent(id)
  res.send(loginResult)
});


studentsRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertStudent(req.body)
  res.send(upsertResult)
})

export default studentsRouter;


