<template>
  <div class="tag" :style="{color, backgroundColor, borderRadius: borderRadius + 'px', border, ...otherStyle}" @click="onClick">
    {{ text }}
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    color: {
      type: String,
      default: '#FFF'
    },
    backgroundColor: {
      type: String,
      default: '#B152D5'
    },
    borderRadius: {
      type: Number | String,
      default: 10
    },
    border: {
      type: String,
      default: 'none'
    },
    otherStyle: {
      type: Object,
      default: () => {}
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClick () {
      if (!this.clickable) return
      this.$emit('onClick')
    }
  }
}
</script>
<style lang="less" scoped>
  .tag {
    display: inline-block;
    text-align: center;
    font-size: 10px;
    height: 20px;
    line-height: 20px;
    padding: 0 12px;
    margin-left: 6px;
  }
</style>
