import axios from 'axios'

export const axiosInstance = axios.create({
   baseURL: "https://arcrobot.ru/api",
   timeout: 20000,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
})



axiosInstance.interceptors.request.use(
   (config) => {
      for (const key in config.params) {
         if (Object.prototype.hasOwnProperty.call(config.params, key)) {
            const element = config.params[key]

            if (element === null || element === '') {
               delete config.params[key]
            }
         }
      }
      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response) => {
      return response
   },
   (error) => {
      return Promise.reject(error)
   }
)
