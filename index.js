class LocalStorageSingleton {
  constructor() {
    if (!LocalStorageSingleton.instance) {
      LocalStorageSingleton.instance = this;
    }
    return LocalStorageSingleton.instance;
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }
}

const localStorageSingleton = new LocalStorageSingleton();
Object.freeze(localStorageSingleton);

module.exports = localStorageSingleton;
