<template>
  <article class="article-style">
    <div :class="['title-btn', titleClass]">
      <div :class="['title', titleTxtStyle]">{{ articleTitle }}</div>
      <div class="btn" v-if="btnTxt" @click="clickBtn">{{ btnTxt }}</div>
      <slot name="time"></slot>
    </div>
    <slot></slot>
  </article>
</template>
<script>
export default {
  props: {
    articleTitle: String,
    btnTxt: String,
    titleClass: {
      type: String,
      default: ''
    },
    titleTxtStyle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickBtn () {
      this.$emit('clickBtn', this.btnTxt)
    }
  },
  mounted () {
    window.vm = this
  }
}
</script>
<style lang="less" scoped>
  .article-style {
    display: flex;
    flex-direction: column;
    position: relative;
    .title-btn {
      background: #F4F4F4;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      line-height: 21px;
      padding: 15px 13px 7px 21px;
      .title {
        color: #646464;
      }
      .btn {
        color: #646464;
        opacity: 0.5;
      }
    }
  }
</style>
