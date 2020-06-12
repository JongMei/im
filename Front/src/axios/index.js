/**
 *
 * ajax全局配置
 *
 */
import axios from 'axios';

// axios 配置
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers['Content-Type'] = 'application/json'; //配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json'; //配置请求头
// axios.defaults.headers.get['Content-Type'] = 'application/json'; //配置请求头
// axios.defaults.headers.delete['Content-Type'] = 'application/json'; //配置请求头
// axios.defaults.headers.put['Content-Type'] = 'application/json'; //配置请求头

// 当实例创建时设置默认配置
axios.defaults.baseURL = 'http://localhost:3000';

//http request 拦截器
// axios.interceptors.request.use((config) => {
//     // config.setHeaders([
//     //     // 在这里设置请求头与携带token信息
//     // ]);
//     return config
// }, (error) => {
//     return Promise.reject(error);
// });

//http response 拦截器:返回状态判断（添加响应拦截器）
// axios.interceptors.response.use(
//     response => {
//         if (response.data.code === 40008) {
//             // 40008 说明 token 验证失败
//             // 可以直接跳转到登录页面，重新登录获取 token
//             window.location.reload();//刷新页面，如果该页面需要登录，则会自动跳转到登录页面
//             return {
//                 code:12000,
//                 message:"登录过时,退出请重新登录"
//             };
//         }
//         return response.data;
//     },
//     error => {
//         return Promise.reject(error.response) // 返回接口返回的错误信息
//     }
// );

export default axios;