import InitShellContainer from './InitShellContainer';

const {TARGET} = process.env;
const platform = TARGET || 'web';
const InitShell = require(`./InitShell.${platform}`).default;

export default InitShellContainer(InitShell);
