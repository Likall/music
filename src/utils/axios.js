// 配置请求地址前缀，拦截器
// 导入axios
import axios from 'axios';
import { util } from 'node-forge';
import { request } from 'https';

// 基本配置
const Util = {
    apiPath:'http://localhost:3000'
}

// Ajax通用配置,创建实例
Util.ajax = axios.create({
    baseURL:Util.apiPath,
    timeout:5000
})

// 添加响应拦截器
Util.ajax.interceptors.response.use(function(response){
    return response.data;
})

export default Util;