module.exports = function override(config, env) {
    // 在这里添加或修改 webpack 配置
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
  
    return config;
  }
  