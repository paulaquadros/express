import express, { Request, Response } from 'express';
import router from './router/router';
import dotenv from 'dotenv';
import validateEnv from './utils/validEnv';
import logger from './middlewares/logger';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;
const publicPath = `${process.cwd()}/public`;

app.engine(
  'handlebars',
  engine({ helpers: require(`${__dirname}/views/helpers/helpers.ts`) }),
);

app.use(express.json());

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(logger('completo')); // usa o middleware logger com o tipo completo para todas as rotas

// app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));

app.use('/img', [express.static(`${__dirname}/public/img`)]);

app.use(
  '/webfonts',
  express.static(
    `${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`,
  ),
);

app.use('/js', [
  express.static(`${publicPath}/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`),
]);

app.use(
  sass({
    src: `${publicPath}/scss`,
    dest: `${publicPath}/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

app.use('/css', express.static(`${__dirname}/../public/css`));

app.use((req: Request, res: Response, next) => {
  console.log('oi');
  next();
});

app.get('/page', (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});

app.get('/', (req, res) => {
  res.end('Bem-vindo ao meu site!');
});

app.get('/sobre', (req, res) => {
  res.end('Bem-vindo à página sobre!');
});

app.use(router);

app.use((req, res) => {
  res.statusCode = 404;
  res.end('404!');
});
