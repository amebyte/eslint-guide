# eslint-guide
ESLint 原理到实战及代码规范自动化

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
