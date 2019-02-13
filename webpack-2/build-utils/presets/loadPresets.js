
const webpackmerge = require('webpack-merge');
const path = require('path');
module.exports = ({mode, presets}) => {
    const presetsArray = [].concat(...[presets]);
    const loadPresets = presetsArray.map(preset => 
        require(path.resolve(__dirname, `${loadPreset}`))
        );
    return webpackmerge({}, ...loadPresets);
}