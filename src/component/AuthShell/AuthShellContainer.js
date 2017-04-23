import {connect} from 'react-redux';

const AuthShellContainer = connect(({user}) => ({user}));

export default AuthShellContainer;
