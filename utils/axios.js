import axios from 'axios'

class ApiClient {
  constructor(axiosInst) {
    this.axios = axiosInst
  }

  makeRequest = (url, method, data = {}) => this.axios({
    url,
    method,
    data,
  })

  getRequest = (url, config) => this.makeRequest(url, 'GET', config)

  postRequest = (url, config) => this.makeRequest(url, 'POST', config)

  getArticles = () => this.getRequest('/articles/')
  
  addArticles = (data) => this.postRequest('/articles/', data)
}

const axiosInst = axios.create({
  baseURL:'http://localhost:3000/api'
})


export default new ApiClient(axiosInst)