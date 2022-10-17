# eslint-guide
ESLint 探索

```
pnpm install esprima estraverse escodegen

pnpm install eslint -D
// 初始化配置 ESLint
pnpm create @eslint/config

// 运行 ESLint
npx eslint test.js

npx eslint test.js --fix

cat test.js | npx eslint --stdin
```



eslint-plugin-colint

npm install yo generator-eslint -g

yo eslint:plugin

yo eslint:rule



根目录：

pnpm install eslint-plugin-colint@workspace -w



每一个访问器绑定多少规则