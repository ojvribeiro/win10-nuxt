// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    rules: {
      'curly': 'off',
      'prettier/prettier': ['error'],
      'style/arrow-parens': 'off',
      'style/brace-style': 'off',
      'style/quote-props': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-indent': ['error', 4],
      'vue/operator-linebreak': 'off',
      'vue/require-default-prop': 0,
      'vue/singleline-html-element-content-newline': 0,
    },
  }),
)
