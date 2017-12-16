module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "flowtype/boolean-style": [
            2,
            "boolean"
        ],
        "flowtype/define-flow-type": 1,
        "flowtype/generic-spacing": [
          2,
          "never"
        ],
        "flowtype/no-primitive-constructor-types": 2,
        "flowtype/no-types-missing-file-annotation": 2,
        "flowtype/object-type-delimiter": [
          2,
          "comma"
        ],
        "flowtype/require-parameter-type": 2,
        "flowtype/require-return-type": [
          2,
          "always",
          {
            "annotateUndefined": "never"
          }
        ],
        "flowtype/require-valid-file-annotation": 2,
        "flowtype/semi": [
          2,
          "always"
        ],
        "flowtype/space-after-type-colon": [
          2,
          "always"
        ],
        "flowtype/space-before-generic-bracket": [
          2,
          "never"
        ],
        "flowtype/space-before-type-colon": [
          2,
          "never"
        ],
        "flowtype/union-intersection-spacing": [
          2,
          "always"
        ],
        "flowtype/use-flow-type": 1,
        "flowtype/valid-syntax": 1
    }
};