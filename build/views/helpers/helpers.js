"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaProfs = void 0;
function listaProfs(profs) {
    const lista = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${lista.join('')}</ul>`;
}
exports.listaProfs = listaProfs;
