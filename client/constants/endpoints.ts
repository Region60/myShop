import { Constants } from "./constants"

const host = "http://back:5000/"

const endpoints = {
  fetchProduct: `${host}product/`,
  loadProduct:`http://localhost:5000/product`,
  login: `http://localhost:5000/auth/login`,
  register: `${host}users/`,
}

export default endpoints
