import merge from 'deepmerge';

import strictCodeStyleConfig from './code-style';
import defaultConfig from './default';
import strictTypescriptConfig from './default';

const config = merge(strictCodeStyleConfig, strictTypescriptConfig);

export default merge(defaultConfig, config);