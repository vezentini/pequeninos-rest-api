import express, { Request, Response } from 'express'
import multer from 'multer';
import { pathOr } from 'ramda';
import { deleteAccount, findAccounts, loginAccount, upsertAccount } from '../services/accounts';


const accountsRouter = express.Router();

accountsRouter.use(express.json());
accountsRouter.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();

const size = 150 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

accountsRouter.get('/login', upload.single('file'), async (req: Request, res: Response) => {
  const email = pathOr('', ['email'], req.query);
  const password = pathOr('', ['password'], req.query);
  const loginResult = await loginAccount({ email, password })
  res.send(loginResult)
});


accountsRouter.get('/find', upload.single('file'), async (req: Request, res: Response) => {
  const loginResult = await findAccounts()
  res.send(loginResult)
});

accountsRouter.post('/upsert', async (req: Request, res: Response) => {
  const upsertResult = await upsertAccount(req.body)
  res.send(upsertResult)
})

accountsRouter.post('/delete', async (req: Request, res: Response) => {
  const deleteResult = await deleteAccount(req.body)
  res.send(deleteResult)
})

export default accountsRouter;


