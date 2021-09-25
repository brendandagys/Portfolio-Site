import axios, { AxiosInstance } from 'axios'

let axiosNewBaseURL: AxiosInstance

if (process.env.NODE_ENV === 'production') {
  axiosNewBaseURL = axios.create({
    baseURL: `${window.location.href.split('://')[0]}://52.60.182.165:8080`,
  })
} else {
  axiosNewBaseURL = axios
}

export default axiosNewBaseURL
