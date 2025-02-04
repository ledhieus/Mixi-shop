import { get } from "../utils/request"

export const getItem = async (path) => {
  const result = await get(path)
  return result
}