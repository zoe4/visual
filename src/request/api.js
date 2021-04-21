import {get, post} from './http'

export default {
  getTest(params){
    return get('/api',params)
  },
  postTest(params){
    return post('/api',params)
  },
  getData(params){
    return get('/data/data.json',params)
  },
}