/**
 * Saves an specific key in the localstorage database
 * @param {*} key the key to store
 * @param {*} value the value associated to the key to be stored
 */
function saveToLocalStorage(key, value) {\
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}

/**
 *
 * @param {*} key
 */
function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}