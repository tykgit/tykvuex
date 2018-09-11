/* axios简单封装，最后暴露出来，为了在vuex的action进行数据请求，因为直接在vuex中找不到this */
import axios from 'axios'

const service = axios.create({
  baseURL:'',
  timeout: 5000
})

service.interceptors.request.use(config => {
  return config
}, error=> {
  return Promise.reject(error)
})

service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service