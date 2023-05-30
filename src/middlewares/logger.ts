import { Request, Response, NextFunction } from 'express';
import { Tipo } from './loggerTypes';
import fs from 'fs';

function logger(tipo: Tipo) {
  const logPath = `${process.cwd()}/${process.env.logPath}`;

  return (req: Request, res: Response, next: NextFunction) => {
    let log;
    if (tipo === 'completo') {
      log = `${new Date().toISOString()} $(req.url) $(req, method) ${
        req.httpVersion
      } ${req.get('User-Agent')}\n`;
      next();
    } else {
      log = `${new Date().toISOString()} $(req.url) $(req, method)\n`;
      next();
    }
    fs.writeFile(logPath, log, { flag: 'a' }, (err) => {
      if (err) console.log(err);
    });
  };
}

export default logger;
