module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@atom': './src/atom',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@shared': './src/shared',
          '@storage': './src/storage',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
