module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@@': './',
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@navigator': './src/navigator',
          '@pages': './src/pages',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
