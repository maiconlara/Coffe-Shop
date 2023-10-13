import axios from 'axios'
const apiId = '65002dc116b5865e842a9fff'

export const api = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    'app-id': apiId,
  },
})