module.exports = function(api) {
  //api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposal: true,
        }
      },
    ],
  ];
  const plugins = [
  ];

  if (api.env('production')) {
    plugins.push('babel-plugin-unassert');
  } else {
    presets.push('power-assert');
  }

  return {
    presets,
    plugins,
  };
};
