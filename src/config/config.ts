require('dotenv').config();

export const PORT: string | number = process.env.PORT || 4000;
// @ts-ignore
export const USER: string = process.env.USER;
// @ts-ignore
export const PASSWORD: string = process.env.PASSWORD;

export const LIMIT = 10;

