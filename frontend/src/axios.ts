import axios, { AxiosInstance } from 'axios'

let axiosNewBaseURL: AxiosInstance

if (process.env.NODE_ENV === 'production') {
  axiosNewBaseURL = axios.create({
    baseURL: 'https://api.brendandagys.com',
  })
} else {
  axiosNewBaseURL = axios
}

export default axiosNewBaseURL
