
const webPackMerge = require('webpack-merge')

const environmentConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);
const presetConfig = require('./build-utils/presets/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    return webPackMerge({
        mode: mode,
        entry: "./src/index.js",
        output: {
            filename: "[name].bundle.js"
        },
        optimization: {
            splitChunks: {
                chunks: 'async',
                name: true,
                minChunks: 2,
            }
        }
    }, 
    environmentConfig(mode),
    presetConfig({mode, presets}));
}