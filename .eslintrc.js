module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off', //  允许++/--
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off', // 禁止对函数参数再赋值
    'no-restricted-syntax': 'off', // 是否禁止特定JavaScript语法
    'no-multi-assign': 'off', // 是否允许连续赋值
    'arrow-body-style': 'off',  // 箭头函数主体是否需要大括号包含
    'no-restricted-exports': 'off', // 是否禁止export default
    'prefer-exponentiation-operator': 'off', // 是否禁止Math.pow运算
    'no-useless-backreference': 'off',
    'no-unsafe-optional-chaining': 'off',
    'prefer-regex-literals': 'off', // 是否禁止RegExp构造函数
    'no-prototype-builtins': 'off', // 是否禁止直接调用Object的原型属性
    'no-restricted-globals': 'off', // 是否允许直接使用全局变量
    'one-var': 'off',
    'memberSyntaxSortOrder': ['none'],
    'guard-for-in': 'off',
    'consistent-return': 'off', // 是否强制要求函数有一致的return动作
    'import/extensions': ['.js', '.jsx'], // import的文件格式
    'import/prefer-default-export': 'off',
    // 未确定
    'no-unreachable-loop': 'off',
    'no-setter-return': 'off',
    'no-promise-executor-return': 'off',
    'no-loss-of-precision': 'off',
    'no-import-assign': 'off',
    'no-dupe-else-if': 'off',
    'no-nonoctal-decimal-escape': 'off',
    'no-constructor-return': 'off',
    'grouped-accessor-pairs': 'off',
    'default-param-last': 'off',
    'default-case-last': 'off',

  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src', 'node']
        ],
        extensions: ['.vue', '.json', '.js']
      }
    }
  },
};
