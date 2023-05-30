"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function logger(tipo) {
    const logPath = `${process.cwd()}/${process.env.logPath}`;
    return (req, res, next) => {
        let log;
        if (tipo === 'completo') {
            log = `${new Date().toISOString()} $(req.url) $(req, method) ${req.httpVersion} ${req.get('User-Agent')}\n`;
            next();
        }
        else {
            log = `${new Date().toISOString()} $(req.url) $(req, method)\n`;
            next();
        }
        fs_1.default.writeFile(logPath, log, { flag: 'a' }, (err) => {
            if (err)
                console.log(err);
        });
    };
}
exports.default = logger;
