/*
  Generators: Function can be paused while while other functions run
    *`yield` expression pauses a generator
    *Concept of 2 way message passing into and out of a generator
      +`yield` sends messages out of a generator
      +A restart will send messages back into generator
      +When pass a message back into generator - that value will be in `yield` expression
*/

function *idMaker() {
  let index = 0;
  while(true)
  yield index++;
}

const gen = idMaker();

console.log("gen 1", gen.next().value);
console.log("gen 2", gen.next().value);
console.log("gen 3", gen.next().value);
