import { Profs, Tech } from './helpersTypes';

export function listaProfs(profs: Profs[]) {
  const lista = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
  return `<ul>${lista.join('')}</ul>`;
}

export function technologiesByNode(tech: Tech[]) {
  const lista = tech.map((t) => {
    if (t.poweredByNodejs) {
      return `<li>${t.name}-${t.type}</li>`;
    }
  });
  return `<ul>${lista.join('')}</ul>`;
}
