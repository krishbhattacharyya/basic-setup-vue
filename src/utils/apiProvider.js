import axios from 'axios';

import { API } from '../services/API';

const getRequest = (url, query) => {
    //const token ="Bearer token";
    //const config = { headers: token, params: query };
    return axios.get(url);
};

export const ApiProvider = {
    getRequest
};
