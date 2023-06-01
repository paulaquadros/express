import { Profs } from './helpersTypes';

export function listaProfs(profs: Profs[]) {
  const lista = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
  return `<ul>${lista.join('')}</ul>`;
}
