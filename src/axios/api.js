// 封装后台连接
import axios from 'axios';
function http(method,url,data){
    return new Promise((resolve) => {
        axios({
            method: method,
            url: '/api' + url,
            data: method == 'POST' ? data : null,
            params: method == 'GET' ? data : null,
        }).then(ret => resolve(ret))
        .catch(err => resolve(err));
    })
}
function apiAxios(method, url, params){
    return new Promise((resolve) => {
        http({
            method: method,
            url: url,
            data: params
        }).then(res => function(res){
            console.log(res)
        }).catch(err => function(err){
            console.log(err)
        });
    })
}
  
  export default {
    get: function (url, params, response) {
      return apiAxios('GET', url, params, response)
    },
    post: function (url, params, response) {
      return apiAxios('POST', url, params, response)
    },
    put: function (url, params, response) {
      return apiAxios('PUT', url, params, response)
    },
    delete: function (url, params, response) {
      return apiAxios('DELETE', url, params, response)
    }
  }