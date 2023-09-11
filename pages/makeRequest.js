import axios from "axios"

export const makeRequest = axios.create({
  baseURL:process.env.NEXT_PUBLIC_URL,
  heaader:{
    Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
  },
})