import express, { Request, Response } from 'express'
import multer from 'multer';
import { findStudents, upsertStudent } from '../services/students';


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
  const loginResult = await findStudents()
  res.send(loginResult)
});

studentRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertStudent(req.body)
  res.send(upsertResult)
})

export default studentRouter;


