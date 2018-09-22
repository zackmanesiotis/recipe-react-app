import axios from 'axios';

export default class HttpService {
  static request(method, endpoint, additionalData, config, user) {
    if (additionalData) {
      additionalData = Object.keys(additionalData).length === 0 ? null : { data: additionalData };
    }

    const data = {
      ...additionalData,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      json: true
    };

    if (user && user.token) {
      data.headers['Authorization'] = 'Bearer ' + user.token;
    }

    const baseUrl = 'localhost:3000';

    const methodAndUrl = {
      method: method,
      url: endpoint.includes('http') ? endpoint : baseUrl + endpoint
    };

    const request = {
      ...methodAndUrl,
      ...data,
      ...config
    };

    return axios.request(request).then(res => res.data);
  }
}

export const HttpMethods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};
