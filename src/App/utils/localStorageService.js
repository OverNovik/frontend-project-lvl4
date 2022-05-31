class LocalStorageService {
  tokenTitle = 'userToken';

  setToken(token) {
    localStorage.setItem(this.tokenTitle, token)
  }

  getToken() {
    return localStorage.getItem(this.tokenTitle);
  }

  removeToken() {
    localStorage.removeItem(this.tokenTitle);
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService;