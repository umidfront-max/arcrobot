import { axiosInstance } from "./axios";

export async function createContact_API(data) {
   try {
      const response = await axiosInstance.post(`/consult/create`, data)

      return [null, response]
   } catch (error) {
      return [error, null]
   }
}
export async function getBlog_API() {
   try {
      const response = await axiosInstance.get(`/blog`)

      return [null, response.data]
   } catch (error) {
      return [error, null]
   }

} export async function getSites_API() {
   try {
      const response = await axiosInstance.get(`/sites`)

      return [null, response.data]
   } catch (error) {
      return [error, null]
   }
}
export async function getCatalog_API() {
   try {
      const response = await axiosInstance.get(`/catalog`)

      return [null, response.data]
   } catch (error) {
      return [error, null]
   }
}
export async function getCatalogId_API(id) {
   try {
      const response = await axiosInstance.get(`/catalog/${id}`)

      return [null, response.data]
   } catch (error) {
      return [error, null]
   }
}
export async function getBlogId_API(id) {
   try {
      const response = await axiosInstance.get(`/blog/${id}`,)

      return [null, response.data]
   } catch (error) {
      return [error, null]
   }
}