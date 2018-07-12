import {commonParams} from './config'
import axios from 'axios'

export function getMusic(mid) {
  const url = '/api/getSong'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    filename: 'c400' + mid + '.m4a',
    guid: 1976488095,
    platform: 'yqq',
    loginUin: 0,
    uin: 0,
    hostUin: 0,
    needNewCode: 0,
    g_tk: 5381,
    cid: 205361747,
    format: 'json'
  })

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
