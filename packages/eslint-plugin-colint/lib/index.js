/**
 * @fileoverview cobyte lint
 * @author eslint-plugin-colint
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs: {
        recommended: {
            plugins: ['colint'],
            rules: {
                'colint/no-var': ['error']
            }
        }
    }
}


