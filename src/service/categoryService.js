import { get } from "../utils/request"

export const getCategory = async (path) => {
  const result = await get(path)
  return result
}