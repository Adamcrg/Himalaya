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
          '@navigators': './src/navigators',
          '@pages': './src/pages',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
