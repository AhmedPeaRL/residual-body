import { subscribe } from '../../hcm-pulse-adjacency-bus/bus/index.js';

let residue = [];

subscribe(pulse => {
  residue.push({
    t: pulse.t,
    weight: pulse.intensity,
  });

  // نسمح بالتراكم، لكن نمنع التضخم
  if (residue.length > 120) {
    residue.shift();
  }
});

export function getResidue() {
  return residue.slice();
}
