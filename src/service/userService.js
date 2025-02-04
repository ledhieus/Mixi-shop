import { get, post } from "../utils/request"

export const getUser = async (path) => {
  const result = await get(`/user?${path}`)
  return result
}

export const createUser = async (data) => {
  const result = await post("/user", data)
  return result
}