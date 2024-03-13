import express, { Request, Response } from 'express'
import cors from 'cors'
import loginAccount from './services/accounts.login.service'
import upsertAccount from './services/accounts.upsert.service'
import mongoose from 'mongoose'
import multer from 'multer';

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const URI = "mongodb+srv://pequeninos-app:q8qDSmnSRxKkRWhl@cluster0.hhhy8qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bem-vindo!')
})

const storage = multer.memoryStorage();

const size = 150 * 1024 * 1024;
const upload = multer({
  storage,
  limits: {
    fileSize: size,
    fieldSize: size,
  },
});

app.get('/loginAccount', upload.single('file'), async (req: Request, res: Response) => {
  const loginResult = await loginAccount(req.body)
  res.send(loginResult)
});

app.post('/upsertAccount', async (req: Request, res: Response) => {
  const upsertResult = await upsertAccount(req.body)
  res.send(upsertResult)
})

app.use(cors({
  origin: '*'
}))

mongoose.connect(URI).catch(() => {
  console.log('Failed to connect into mongo by URI');
})

app.use((req, res) => {
  res.status(404)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})


