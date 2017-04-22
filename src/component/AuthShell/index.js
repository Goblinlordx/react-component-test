import InitShellContainer from './AuthShellContainer';

const {TARGET} = process.env;
const platform = TARGET || 'web';
const InitShell = require(`./AuthShell.${platform}`).default;

export default AuthShellContainer(AuthShell);
