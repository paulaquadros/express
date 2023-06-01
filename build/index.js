"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const dotenv_1 = __importDefault(require("dotenv"));
const validEnv_1 = __importDefault(require("./utils/validEnv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const express_handlebars_1 = require("express-handlebars");
dotenv_1.default.config();
(0, validEnv_1.default)();
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const publicPath = `${process.cwd()}/public`;
app.engine('handlebars', (0, express_handlebars_1.engine)());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);
app.use((0, logger_1.default)('completo')); // usa o middleware logger com o tipo completo para todas as rotas
app.use('/css', express_1.default.static(`${publicPath}/css`));
app.use('/js', express_1.default.static(`${publicPath}/js`));
app.use((req, res, next) => {
    console.log('oi');
    next();
});
app.get('/page', (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});
app.get('/', (req, res) => {
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
app.use(router_1.default);
app.use((req, res) => {
    res.statusCode = 404;
    res.end('404!');
});
