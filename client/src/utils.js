function isAuthenticated() {
    return Boolean(localStorage.getItem('user'));
}

export {
    isAuthenticated,
}