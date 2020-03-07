<template>
  <section class="list-section-wraper">
    <list-item v-for="listItem in listData" :name="listItem.name" :status="listItem.status" :email="listItem.email" :phone="listItem.phone" :key="listItem.email"></list-item>
  </section>
</template>
<script>
import listItem from './listItem.vue'
export default {
  components: {
    listItem
  },
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less">
  .list-section-wraper {

  }
</style>
