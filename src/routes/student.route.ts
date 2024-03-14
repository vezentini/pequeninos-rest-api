import express, { Request, Response } from 'express'
import multer from 'multer';
import { findStudents, upsertStudent } from '../services/students';


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
  const loginResult = await findStudents()
  res.send(loginResult)
});

studentsRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertStudent(req.body)
  res.send(upsertResult)
})

export default studentsRouter;


