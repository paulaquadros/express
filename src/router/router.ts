import { Router } from 'express';
import mainController from '../controllers/mainController';


const router = Router();


router.get('/lorem', mainController.lorem);

router.get('/', mainController.index);

router.get('/sobre', mainController.sobre);

router.get('/hb1', mainController.hb1);

router.get('/hb2', mainController.hb2);

router.get('/hb3', mainController.hb3);

router.get('/hb4', mainController.hb4);

router.get('/hb5', mainController.hb5);


// function generateLoremIpsum(paragraphs: number) {
//   const words = [
//     // Palavras aleatórias para gerar o texto :D
//     "Lorem",
//     "ipsum",
//     "dolor",
//     "sit",
//     "amet",
//     "consectetur",
//     "adipiscing",
//     "elit",
//     "sed",
//     "do",
//     "eiusmod",
//     "tempor",
//     "incididunt",
//     "ut",
//     "labore",
//     "et",
//     "dolore",
//     "magna",
//     "aliqua",
//   ];

//   const loremIpsumParagraphs = [];

//   for (let i = 0; i < paragraphs; i++) {
//     const paragraphLength = Math.floor(Math.random() * 20) + 3; // Gera parágrafos com 3 a 22 palavras aleatórias
//     const paragraphWords = []; // Array para armazenar as palavras do parágrafo

//     for (let j = 0; j < paragraphLength; j++) {
//       const randomIndex = Math.floor(Math.random() * words.length); // Obtendo palavra aleatória
//       paragraphWords.push(words[randomIndex]); // Adicionando a palavra ao parágrafo
//     }

//     const loremIpsumParagraph = paragraphWords.join(" ");
//     loremIpsumParagraphs.push(loremIpsumParagraph); // Adicionando o parágrafo ao array de parágrafos
//   }

//   return loremIpsumParagraphs;
// }

// router.get('/lorem', (req, res) => {
//   type RequestQueries = {
//     amount?: string;
//   }

//   const queries: RequestQueries = req.query;

//   const amount = parseInt(queries.amount || '0');

//   if (amount === 0) {
//     return res.sendFile('lorem.html', { root: 'public/html' });
//   }

//   const paragraphs = generateLoremIpsum(amount);

//   res.json({ paragraphs });
// });

// router.get('/', (req, res) => {
//   res.send('Página principal do site');
// });

// router.get('/sobre', (req, res) => {
//   res.send('Página sobre');
// });

// router.get('/hb1', (req, res) => {
//   const profes = [
//     { nome: 'David Fernandes', sala: 1238 },
//     { nome: 'Horácio Fernandes', sala: 1233 },
//     { nome: 'Edleno Moura', sala: 1236 },
//     { nome: 'Elaine Harada', sala: 1231 },
//   ];
//   res.render('hb1', {
//     profes,
//     layout: false,
//   });
// });

// router.get('/hb2', (req, res) => {
//   res.render('hb2', {
//     poweredByNodejs: true,
//     name: 'Express',
//     type: 'Framework',
//     layout: false,
//   });
// });

// router.get('/hb3', (req, res) => {
//   res.render('hb3', {
//     mensagem: 'Olá, você está aprendendo Express + HBS!',
//     layout: false,
//   });
// });

// router.get('/hb4', (req, res) => {
//   const profes = [
//     { nome: 'David Fernandes', sala: 1238 },
//     { nome: 'Horácio Fernandes', sala: 1233 },
//     { nome: 'Edleno Moura', sala: 1236 },
//     { nome: 'Elaine Harada', sala: 1231 },
//   ];
//   res.render('hb4', {
//     profes,
//     layout: false,
//   });
// });

// router.get('/hb5', (req, res) => {
//   const technologies = [
//     { name: 'Express', type: 'Framework', poweredByNodejs: true },
//     { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
//     { name: 'React', type: 'Library', poweredByNodejs: true },
//     { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
//     { name: 'Django', type: 'Framework', poweredByNodejs: false },
//     { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
//     { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
//   ];
//   res.render('hb5', {
//     technologies,
//     layout: false,
//   });
// });

export default router;
