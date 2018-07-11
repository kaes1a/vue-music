import {commonParams} from './config'
import axios from 'axios'

export function getMusic(mid) {
  const url = '/api/getSong'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    filename: 'c400' + mid + '.m4a',
    guid: 2326725858,
    platform: 'yqq',
    uin: 0,
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    format: 'json',
    g_tk: 798210738,
    loginUin: 0,
    notice: 0,
    cid: 205361747
  })

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
