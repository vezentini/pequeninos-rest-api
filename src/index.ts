import express, { } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { accountsRouter, classesRouter, notificationsRouter, studentsRouter } from './routes'
import summariesRouter from './routes/summaries.route'

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const URI = "mongodb+srv://pequeninos-app:q8qDSmnSRxKkRWhl@cluster0.hhhy8qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/accounts', accountsRouter)
app.use('/classes', classesRouter)
app.use('/students', studentsRouter)
app.use('/notifications', notificationsRouter)
app.use('/summaries', summariesRouter)

app.get('/', (req, res) => {
  res.send('Bem-vindo!')
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


