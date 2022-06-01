const USER_TOKEN = 'USER_TOKEN';

const setToken = (token) => {
  localStorage.setItem(USER_TOKEN, token)
}

const getToken = () => {
  return localStorage.getItem(USER_TOKEN);
}

const removeToken = () => {
  localStorage.removeItem(USER_TOKEN);
}

export default { setToken, getToken, removeToken };