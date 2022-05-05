function isAuthenticated() {
    return Boolean(localStorage.getItem('user'));
}

function clearLocalStorage() {
    localStorage.clear();
}

function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export {
    isAuthenticated,
    clearLocalStorage,
    getUserData,
}