import axios, { AxiosInstance } from 'axios'

let axiosNewBaseURL: AxiosInstance

if (process.env.NODE_ENV === 'production') {
  axiosNewBaseURL = axios.create({
    baseURL: 'https://18.209.99.110:8080',
  })
} else {
  axiosNewBaseURL = axios
}

export default axiosNewBaseURL
