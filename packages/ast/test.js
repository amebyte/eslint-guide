const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')

const code = 'function fn() {};'

let ast = esprima.parseScript(code)

estraverse.traverse(ast, {
    enter(node) {
        if(node.type === 'FunctionDeclaration') {
            node.id.name = 'Fn'
        }
    },
    leave(node) {

    }
})

console.log(escodegen.generate(ast))