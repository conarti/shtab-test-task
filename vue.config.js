const { defineConfig } = require('@vue/cli-service');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new SpriteLoaderPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'sprite.svg',
              },
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  'preset-default',
                  {
                    name: 'removeAttrs',
                    params: {
                      attrs: '(fill|stroke)',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
});
