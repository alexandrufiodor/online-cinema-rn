export const SERVER_URL = process.env.SERVER_URL
export const API_URL = `${SERVER_URL}/api`
console.log('🚀api.config.ts:3', JSON.stringify(SERVER_URL, null, 2))
export const getAuthUrl = (string: string) => `/auth/${string}`
export const getUserUrl = (string: string) => `/users/${string}`
export const getMoviesUrl = (string: string) => `/movies/${string}`
export const getGenresUrl = (string: string) => `/genres/${string}`
export const getActorsUrl = (string: string) => `/actors/${string}`
