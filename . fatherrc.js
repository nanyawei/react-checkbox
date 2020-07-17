export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  umd: {
    name: 'react-checkbox',
    sourcemap: true,
    globals: {
      react: 'React',
      checkbox: 'Checkbox',
      component: 'Component'
    }
  },
  preCommit: {
    eslint: true,
    prettier: true
  },
  runtimeHelpers: true
}