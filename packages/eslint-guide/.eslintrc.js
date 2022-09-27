module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    "extends": "eslint:recommended",
    'plugins': ['colint'],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        "quotes": [1, "single"],
        'colint/no-var': ['error']
    }
}
