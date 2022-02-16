import {
    getAuthFromStorage,
    removeAllFromStorage,
} from '../utils/storageProvider';
import router from '../router/index'

const currentUser = () => getAuthFromStorage();

const isLogin = () => {
    const currentUser = getAuthFromStorage();
    return currentUser ? true : false;
};

const logout = () => {
    removeAllFromStorage();
    router.push('/login');
    location.reload();
};

export const authenticationService = {
    isLogin,
    logout,
    currentUser,
};
