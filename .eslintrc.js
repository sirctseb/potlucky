module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
        "react",
        "babel"
    ],
    "rules": {
        "indent": ["error", 4],
        "react/jsx-uses-react": 1,
        "class-methods-use-this": [1, {
            "exceptMethods": [
                "componentDidMount",
                "componentDidUpdate",
                "componentWillMount",
                "componentWillReceiveProps",
                "componentWillUnmount",
                "componentWillUpdate",
                "render",
                "shouldComponentUpdate",
            ]
        }]
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
