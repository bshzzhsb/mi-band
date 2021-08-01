export default {
  mount: {
    src: { url: '/dist' },
    public: { url: '/', static: true, resolve: false },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-sass',
      {
        native: true,
      },
    ],
  ],
  alias: {
    '@': './src',
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    cacheDirPath: '.cache/snowpack',
  },
};
