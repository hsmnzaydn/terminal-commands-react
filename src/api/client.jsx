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
    config.headers.Authorization = token;
    return config;
});

instance.interceptors.request.use(request => {
 /*   console.log("----REQUEST----")
    console.log("REQUEST URL: " + request.url)
    console.log("REQUEST METHOD: " + request.method)
    console.log("REQUEST HEADER: " + request.headers)
    console.log("REQUEST DATA: " + JSON.stringify(request.data))
    console.log("--------")*/
    return request
})

instance.interceptors.response.use(
    (response) => {
   /*     console.log("----RESPONSE----")
        console.log("RESPONSE METHOD: " + response.method)
        console.log("RESPONSE DATA: " + JSON.stringify(response.data))
        console.log("--------")
*/
        return response;
    },
    async (err) => {
        alert(err)
        return Promise.reject(err);
    }
);
export const http = instance