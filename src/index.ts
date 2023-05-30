import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validEnv';
import logger from './middlewares/logger';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;

app.use(logger('completo')); // usa o middleware logger com o tipo completo para todas as rotas

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
