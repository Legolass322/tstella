import { CommonTokenStream, CharStream, FileStream } from 'antlr4';
import StellaLexer from './stella/stellaLexer';
import StellaParser from './stella/stellaParser';
import { AstTransformer } from './visitors';
import { typecheckProgram } from './typechecker';

let inputStream: CharStream;

if (process.argv.length === 2) {
  // Example code
  inputStream = new CharStream(
    'language core;\n' +
      'extend with #numeric-literals, #records;\n' +
      'extend with #tuples;\n' +
      'fn add_two(n : Nat) -> Nat {\n' +
      '  return succ(succ(n));\n' +
      '}\n\n' +
      `fn my_add(n : Nat) -> (fn(Nat) -> Nat) {
        return fn(m : Nat) {
          return Nat::rec(n, m, fn(i : Nat) {
            return fn (r : Nat) {
              return succ(r)
            }
          })
        }
      }\n` +
      'fn main(n : Nat) -> Nat {\n' +
      '  return my_add(n)(0);\n' +
      '}\n'
  );
} else if (process.argv.length === 3) {
  inputStream = new FileStream(process.argv[2]);
} else {
  throw 'Usage: node index.js [path/to/file.stella]';
}

const lexer = new StellaLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new StellaParser(tokenStream);

// The entry point for parsing is a "program"
const program = parser.program();

const t = new AstTransformer();
const ast = t.visitProgram(program);
// console.log(JSON.stringify(ast, (k, v) => v ?? null, 2));
typecheckProgram(ast);
