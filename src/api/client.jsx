import axios from 'axios'
import qs from 'qs'

/**
 * axios instance
 */
let instance = axios.create({
    baseURL: `https://terminal-commands-server-182c6fe314ae.herokuapp.com/`,
    paramsSerializer: function (params) {
        return qs.stringify(params, {indices: false})
    }
})

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('authorizationKey');
    config.headers.Authorization = "Bearer xWBHGCTNb6580aL";
    return config;
});

instance.interceptors.request.use(request => {

    return request
})

instance.interceptors.response.use(
    (response) => {


        return response;
    },
    async (err) => {
        alert(err)
        return Promise.reject(err);
    }
);
export const http = instance