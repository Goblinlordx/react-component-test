import T from 'action/type';
const {INITIALIZE} = T;

const init = payload => ({
  type: INITIALIZE,
  payload,
});

export {init};
