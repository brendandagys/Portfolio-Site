import axios, { AxiosInstance } from 'axios'

let axiosNewBaseURL: AxiosInstance

if (process.env.NODE_ENV === 'production') {
  // const [protocol, host] = window.location.href.split('://')
  axiosNewBaseURL = axios.create({
    // baseURL: `${protocol}://${host.split('/')[0]}:8080`,
    baseURL: '35.183.132.45:8080',
  })
} else {
  axiosNewBaseURL = axios
}

export default axiosNewBaseURL
