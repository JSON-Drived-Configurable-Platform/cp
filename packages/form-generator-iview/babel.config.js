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
                    browsers: [
                        'Chrome >= 60',
                        'Safari >= 10.1',
                        'iOS >= 10.3',
                        'Firefox >= 54',
                        'Edge >= 17'
                    ]
                }
            }
        ]
    ];
    const plugins = [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import'
    ];

    return {
        presets,
        plugins
    };
};
