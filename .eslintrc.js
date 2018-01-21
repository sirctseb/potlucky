module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
        "react",
        "babel"
    ],
    "rules": {
      "indent": ["error", 4]
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true
    }
};
