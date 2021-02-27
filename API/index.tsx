import axios from "axios";

declare module "axios" {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

export const api = axios.create({
  baseURL: process.env.FE_BASE_URL,
});
