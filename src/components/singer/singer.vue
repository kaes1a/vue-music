<template>
  <div class="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>

<script>
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
import Singer from 'assets/js/singer'
import ListView from 'base/listview/listview'

const HOT_SINGER_LEN = 20
const HOT_NAME = '热门'

export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)
          console.log(this.singers)
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          singerItems: []
        }
      }
      list.forEach((list, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.singerItems.push(
            new Singer({
              name: list.Fsinger_name,
              id: list.Fsinger_mid
            })
          )
        }
        const key = list.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            singerItems: []
          }
        }
        map[key].singerItems.push(
          new Singer({
            name: list.Fsinger_name,
            id: list.Fsinger_mid
          })
        )
      })
      // 为了得到有序列表，我们需要处理 map
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  components: {
    ListView
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
