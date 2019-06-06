const browsers = require('./package.json').browserslist;
module.exports = function (api) {
    // errors will throw without using cache Api
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false,
                loose: true,
                useBuiltIns: 'usage',
                'corejs': 2,
                targets: {
                    browsers
                }
            }
        ]
    ];
    const plugins = [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-spread'
    ];

    return {
        presets,
        plugins
    };
};
