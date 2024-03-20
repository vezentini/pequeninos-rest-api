import express, { Request, Response } from 'express'
import multer from 'multer';
import { pathOr } from 'ramda';
import { ProfileTypes } from '../entities/enums';
import { findSummaries, upsertSummary } from '../services/summaries';


const summariesRouter = express.Router();

summariesRouter.use(express.json());
summariesRouter.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();

const size = 150 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

summariesRouter.get('/find', upload.single('file'), async (req: Request, res: Response) => {

  console.log(req.query);
  const accountId = pathOr(0, ['accountId'], req.query) as number;
  const profile = pathOr(ProfileTypes.ADMIN, ['profile'], req.query);
  const date = pathOr('', ['date'], req.query);

  console.log(accountId);

  const studentsResult = await findSummaries({ accountId, profile, date })
  res.send(studentsResult)
});

summariesRouter.post('/upsert', async (req: Request, res: Response) => {
  console.log("entrou");
  const upsertResult = await upsertSummary(req.body)
  res.send(upsertResult)
})

export default summariesRouter;


