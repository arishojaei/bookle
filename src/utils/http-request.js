import axios from '../axios';

const END_POINT_PREFIX = '/data';

const get = (url, params = {}, configs = {}) => {
    let request;

    request = axios.get(END_POINT_PREFIX + url, {
        params: params,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            ...configs
        }
    });

    return request;
};

export { get }
