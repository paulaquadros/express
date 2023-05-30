"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs")); // módulo para lidar com arquivos
// comentários a fim de estudo :D
// esta função é um middleware que recebe um tipo de log e retorna uma função
function logger(tipo) {
    // logPath é o caminho do arquivo de log que será criado na raiz do projeto
    const logPath = `${process.cwd()}/${process.env.logPath}`;
    // retorna uma função que recebe os parâmetros de uma requisição e resposta
    return (req, res, next) => {
        let log; // variável que armazenará o log
        if (tipo === 'completo') {
            // se o tipo for completo, o log terá mais informações
            log = `${new Date().toISOString()} $(req.url) $(req, method) ${req.httpVersion} ${req.get('User-Agent')}\n`; // informações da requisição que serão armazenadas no log
            next(); // chama a próxima função
        }
        else {
            // se o tipo for simples, o log terá menos informações
            log = `${new Date().toISOString()} $(req.url) $(req, method)\n`;
            next();
        }
        fs_1.default.writeFile(logPath, log, { flag: 'a' }, (err) => {
            // escreve o log no arquivo, com a flag 'a' para adicionar ao arquivo
            if (err)
                console.log(err);
        });
    };
}
exports.default = logger; // exporta a função logger
