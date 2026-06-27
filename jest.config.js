export default {
  coverageProvider: 'v8',
  transform: {
    '\\.[jt]sx?$': ['jest-esbuild', { minify: false, sourcemap: true }],
  },
};
