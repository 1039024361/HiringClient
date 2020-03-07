<template>
  <header class="list-header-wraper">
    <div class="title-area">
      <Icon type="md-menu" :size="30" color="#FFF" />
      <span class="title-text">CONTACTS</span>
      <Icon type="md-person-add" :size="22" color="#FFF" />
    </div>
    <Input
      class="input-style"
      placeholder="Search Contact"
      />
  </header>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less">
  .list-header-wraper {
    // height: 133px;
    padding: 43px 13px 13px;
    background: #6F50FF 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    .title-area {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
      line-height: 27px;
      .ivu-icon-md-person-add {
        line-height: 30px;
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
