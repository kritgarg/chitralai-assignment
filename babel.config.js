module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['expo'],
    plugins: [
      ['module:react-native-dotenv', {
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true
      }],
      'react-native-reanimated/plugin',
    ],
  };
};
