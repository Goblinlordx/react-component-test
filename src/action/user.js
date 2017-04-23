import T from 'action/type';
const {LOGIN_EMAIL, SET_USER} = T;

const loginViaEmail = ({email, password}) => ({
  type: LOGIN_EMAIL,
  payload: {
    email,
    password,
  },
});

const setUser = payload => ({
  type: SET_USER,
  payload,
});
