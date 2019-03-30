import {serverUrl} from './config'
import axios from 'axios'
const instance = axios.create({
  baseURL:serverUrl,
  timeout:5000,
})
export default instance