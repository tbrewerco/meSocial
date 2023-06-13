import jwtDecode from 'jwt-decode';

export const fetchUser = () => {
    const userInfo = localStorage.getItem('token') !== 'undefined' ? jwtDecode(localStorage.getItem('token')) : localStorage.clear();
    return userInfo;
};