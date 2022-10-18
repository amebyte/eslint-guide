# eslint-plugin-bytelint

test

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-bytelint`:

```sh
npm install eslint-plugin-bytelint --save-dev
```

## Usage

Add `bytelint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "bytelint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "bytelint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


