import {createReducer} from 'utils';
import T from 'action/type';
const {FLUSH, INITIALIZE} = T;

const initReducer = createReducer(
  {
    [FLUSH]() {}, // NOOP
    [INITIALIZE]: (_, init) => init,
  },
  false
);

export default initReducer;
