<template>
  <header class="header-wraper">
    <div class="title-area">
      <Icon class="back-icon" type="ios-arrow-back" color="#FFF" size="30" @click="goBack" />
      <span class="name">{{ info.name }}</span>
    </div>
  </header>
</template>
<script>
export default {
  inject: ['setTransName'],
  data () {
    return {
      info: {
        name: 'John Chan'
      }
    }
  },
  methods: {
    goBack () {
      this.setTransName('slide-trans-right')
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
  .header-wraper {
    // height: 133px;
    padding: 43px 3px 13px;
    background-color: #6F50FF;
    border: 1px solid #707070;
    .title-area {
      display: flex;
      line-height: 27px;
      justify-content: space-between;
      .name {
        display: inline-flex;
        color: #FFF;
        font-size: @name-font;
      }
      &:after {
        content: '';
        width: 30px;
        height: 0;
      }
    }
    .title-text {
      text-align: left;
      font-size: @name-font;
      // font-weight: bold;
      letter-spacing: 0;
      color: #FFFFFF;
    }
    .input-style input {
      height: 36px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border-radius: 10px;
    }
    //Chrome/Opera/Safari,
    input::-webkit-input-placeholder {
      background: #FFFFFF 0% 0% no-repeat padding-box;
      text-align: center;
    }
    // Firefox 19+
    input::-moz-placeholder {
      background: #FFFFFF 0% 0% no-repeat padding-box;
      text-align: center;
    }
    // IE 10+
    input:-ms-input-placeholder {
      background: #FFFFFF 0% 0% no-repeat padding-box;
      text-align: center;
    }
    // Firefox 18-
    input:-moz-placeholder {
      background: #FFFFFF 0% 0% no-repeat padding-box;
      text-align: center;
    }
  }
</style>
