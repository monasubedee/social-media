export const setUserInfo = (data) => localStorage.setItem('userInfo',JSON.stringify(data));

export const getUserInfo = () => JSON.parse(localStorage.getItem('userInfo'));