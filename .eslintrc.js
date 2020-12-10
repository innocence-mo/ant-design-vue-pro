module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        printWidth: 110,
        htmlWhitespaceSensitivity: 'ignore',
        trailingComma: 'none'
      }
    ],
    // 关闭不允许使用console.log()
    'no-console': 'off',
    // 关闭undefined提示
    'no-undef': 0,
    // 关闭尾随逗号
    'comma-dangle': 0,
    //关闭此规则在多行元素的内容之前和之后强制换行。
    'vue/multiline-html-element-content-newline': 0,
    // 关闭每行预期字符判断
    'vue/html-indent': 0,
    'vue/html-closing-bracket-newline': 0,
    // 关闭Vue每行最大属性数量判断
    'vue/max-attributes-per-line': 0,
    // 无内容标签统一为自闭合
    'vue/html-self-closing': 0,
    // 关闭在单行元素的内容前后需要换行符
    'vue/singleline-html-element-content-newline': 0,
    // 关闭v-html的警告
    'vue/no-v-html': 0
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
