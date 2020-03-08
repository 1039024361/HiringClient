<template>
  <div>
    <header-com></header-com>
    <section-com :listData="listData"></section-com>
  </div>
</template>
<script>
import headerCom from './headerCom.vue'
import sectionCom from './sectionCom.vue'
import requestAPI from '@/common/utils/ajax.js'
import GET_LIST from '../../../API/GET_LIST.js'
export default {
  inject: ['setLoading'],
  components: {
    headerCom,
    sectionCom
  },
  data () {
    return {
      listData: []
    }
  },
  methods: {
    async getData () {
      this.setLoading(true)
      const res = await requestAPI(GET_LIST).catch((err) => { console.log(err) })
      if (res && res.responseCode === '10001') {
        this.listData = res.data || []
      }
      this.setLoading(false)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
