# eslint-plugin-colint

cobyte lint

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-colint`:

```sh
npm install eslint-plugin-colint --save-dev
```

## Usage

Add `colint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "colint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "colint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


