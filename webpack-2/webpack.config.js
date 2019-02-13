
const webPackMerge = require('webpack-merge')

const environmentConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);

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
    }, environmentConfig(mode));
}