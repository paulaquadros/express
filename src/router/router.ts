import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Página principal do site');
});
router.get('/sobre', (req, res) => {
  res.send('Página sobre');
});

router.get('/hb1', (req, res) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('hb1', {
    profes,
    layout: false,
  });
});

router.get('/hb2', (req, res) => {
  res.render('hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
    layout: false,
  });
});

router.get('/hb3', (req, res) => {
  res.render('hb3', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
    layout: false,
  });
});

export default router;
