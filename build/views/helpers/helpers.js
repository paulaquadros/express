"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technologiesByNode = exports.listaProfs = void 0;
function listaProfs(profs) {
    const lista = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${lista.join('')}</ul>`;
}
exports.listaProfs = listaProfs;
function technologiesByNode(tech) {
    const lista = tech.map((t) => {
        if (t.poweredByNodejs) {
            return `<li>${t.name}-${t.type}</li>`;
        }
    });
    return `<ul>${lista.join('')}</ul>`;
}
exports.technologiesByNode = technologiesByNode;
