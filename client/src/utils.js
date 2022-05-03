function isAuthenticated() {
    return Boolean(localStorage.getItem('user'));
}

function clearLocalStorage() {
    localStorage.clear();
}

export {
    isAuthenticated,
    clearLocalStorage,
}