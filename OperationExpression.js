// Kjør applikasjonen med terminalkommandoen "node OperationExpression.js"

const fs = require('fs');

const lines = fs.readFileSync('logic-test-input[390].txt', { encoding: 'utf-8' })
    .split('\n')
    .filter(x => x)

function solve(string) {
    let tokens = string.split(' ');
    while (tokens.length > 1) {
        tokens = [eval(tokens.slice(0, 3).join(''))].concat(tokens.slice(3))
    }
    return tokens[0];
}

function withParenthesis(string) {
    while (/\(/.test(string)) {
        string = string.replace(/\(([^()]+)\)/g, (match, group) => {
            return solve(group)
        })
    }

    return solve(string)
}

let sum = 0;
lines.forEach(line => {
    sum += withParenthesis(line);
});

console.log(sum);