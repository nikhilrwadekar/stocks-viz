import dotenv from 'dotenv'

dotenv.config();

// declare let process: {
// 	env: {
// 		NODE_ENV: string
// 		API_URL: string
// 		API_KEY: string
// 	}
// }

export const API_URL: string | undefined = process.env.API_URL ?? '';
export const API_KEY: string | undefined = process.env.API_KEY ?? '';

console.log(API_KEY, API_URL)