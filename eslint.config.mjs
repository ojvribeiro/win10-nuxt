// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

// See: https://eslint.vuejs.org/rules
export default withNuxt(
  antfu({
    rules: {
      'node/prefer-global/process': ['off', 'never'],

      'style/arrow-parens': ['warn', 'always'],

      'style/brace-style': ['warn', '1tbs'],

      'vue/block-order': [
        'warn',
        {
          order: ['script', 'template', 'style'],
        },
      ],

      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],

      'vue/attributes-order': [
        'warn',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            'UNIQUE',
            'TWO_WAY_BINDING',
            'SLOT',
            'OTHER_DIRECTIVES',
            'ATTR_DYNAMIC',
            'ATTR_STATIC',
            'ATTR_SHORTHAND_BOOL',
            'EVENTS',
            'CONTENT',
          ],
        },
      ],

      'vue/operator-linebreak': 'off',

      'vue/multi-word-component-names': 'off',

      'vue/eqeqeq': ['error', 'always'],

      'style/comma-dangle': [
        'warn',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          functions: 'never',
        },
      ],

      'style/operator-linebreak': 'off',

      'vue/singleline-html-element-content-newline': 'off',
    },
  })
)
