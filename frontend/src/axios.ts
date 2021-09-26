import axios, { AxiosInstance } from 'axios'

let axiosNewBaseURL: AxiosInstance

if (process.env.NODE_ENV === 'production') {
  axiosNewBaseURL = axios.create({
    baseURL: 'https://my-site-alb-1065839461.us-east-1.elb.amazonaws.com',
  })
} else {
  axiosNewBaseURL = axios
}

export default axiosNewBaseURL
