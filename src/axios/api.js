// 封装后台连接
import axios from 'axios';
// 底层封装
function http(method,url,data){
    // if(method === 'GET'){
    //   url = 
    // }
    return new Promise((resolve) => {
        axios({
            method: method,
            url: '/api' + url,
            params: method === 'POST' ? data : null,
        }).then(ret => resolve(ret))
        .catch(err => resolve(err));
    })
}
// 可中间插入一层，用做登录拦截等操作
// 基本引用
export default {
  post: function(url,data){
    return http('POST',url,data)
  },
  get: function(url,data){
    return http('GET',url,data)
  }
}