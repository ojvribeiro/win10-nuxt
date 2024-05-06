// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    rules: {
      'vue/html-indent': 'off',
      'style/quote-props': 'off',
      'style/indent': 'off',
      'style/brace-style': 'off',
      'curly': 'off',
      'vue/operator-linebreak': 'off',
      'style/arrow-parens': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  }),
)
