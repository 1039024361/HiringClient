import Axios from 'axios'

// base url for the project
const baseUrl = 'http://www.mocky.io/v2'
const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 60000,
  withCredentials: false
})

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

async function requestAPI (path, params = {}, type = 'get') {
  let res = {}
  try {
    if (type === 'post') {
      res = await axios.request({
        method: type,
        url: path,
        data: params
      })
    } else {
      res = await axios.request({
        method: type,
        url: path,
        params: params
      })
    }
    if (res.data && res.data.responseCode) {
      return res.data
    } else {
      return res
    }
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }
}
export default requestAPI
