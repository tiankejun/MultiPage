module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
         // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        '@vue/standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [2, 4], // 缩进风格js强行4个空格
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
