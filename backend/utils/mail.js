import jwt from "jsonwebtoken"
const JWT_SECRET = '2a7d88a3-ffc2-4a89-9da3-91f25258e1d4'

export const encodeVerification = (data = {}) => {
  return jwt.sign({
    ...data,
    // Other fields
  }, JWT_SECRET)
}

export const decodeVerification = (token = '') => {
  const payload = jwt.verify(token, JWT_SECRET)

  return payload
}