export function* idMaker() {
  let index = 2;
  while (true) yield index++;
}
