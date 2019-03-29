//import { serverUrl } from './config'
import {serverUrl} from './config'
// import axios from 'axios'
import axios from 'axios'

// const instance = axios.create({
//   baseURL: serverUrl,
//   timeout: 5000,
// })
const instance = axios.create({
  baseURL:serverUrl,
  timeout:5000,
})
export default instance