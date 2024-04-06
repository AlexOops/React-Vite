export const getStorageItem = (key) => {
    return String(localStorage.getItem(key) || 0);
}

export const setStorageItem = (key, value) => {
    localStorage.setItem(key, value.toString());
}