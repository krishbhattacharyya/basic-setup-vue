export const saveInStorage = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
};

export const getFromStorage = (key) => {
    var retrievedObject = localStorage.getItem(key) || '';
    return retrievedObject ? JSON.parse(retrievedObject) : '';
};

export const removeFromStorage = (key) => {
    localStorage.removeItem(key);
};

export const removeAllFromStorage = () => {
    localStorage.clear();
};

export const saveAuthInStorage = (val) => {
    const authKey = 'auth';
    saveInStorage(authKey, val);
};

export const updateAuthInStorage = (val) => {
    const authKey = 'auth';
    const auth = getFromStorage(authKey);
    if (auth) {
        saveInStorage(authKey, { ...auth, ...val });
    } else {
        saveInStorage(authKey, val);
    }
};

export const getAuthFromStorage = () => {
    const authKey = 'auth';
    const auth = getFromStorage(authKey);
    return auth;
};