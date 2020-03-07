<template>
  <div>
    <header-com></header-com>
    <section-com :listData="listData"></section-com>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>
<script>
import headerCom from './headerCom.vue'
import sectionCom from './sectionCom.vue'
import requestAPI from '@/common/utils/ajax.js'
import GET_LIST from '../../../API/GET_LIST.js'
export default {
  components: {
    headerCom,
    sectionCom
  },
  data () {
    return {
      listData: [],
      spinShow: false
    }
  },
  methods: {
    async getData () {
      this.spinShow = true
      const res = await requestAPI(GET_LIST)
      if (res && res.responseCode === '10001') {
        this.listData = res.data || []
      }
      this.spinShow = false
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
