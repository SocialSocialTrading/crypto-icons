export const Inj = require("./images/inj.png");

// import Inj from "./images/inj.png";

// export default {
//   Inj
// }

export function catsSay(): string {
  return 'Meow';
}

export default function catsAreAwesome(): string {
  return `Cats say: ${catsSay()}`;
}