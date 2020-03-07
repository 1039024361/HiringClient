<template>
  <div class="detail-log">
    <div class="detail-log-title common-box-shadow">
      <span class="detail-log-title-content">
        <phone-outgoing-icon size="2x" class="custom-class" color="#6F50FF"></phone-outgoing-icon>
        <span class="text">{{ info.type }}</span>
      </span>
    </div>
    <article-outline articleTitle="Call Detail" titleTxtStyle="log-call-detail">
      <div class="log-detail common-box-shadow zIndex90">
        <Input type="textarea" placeholder="What have you discussed?" :autosize="{ minRows: 8 }" v-model="inputText" />
        <span :class="['btn-style', !inputText?'disabled-btn':'active-btn']" @click="confirmLog">Log</span>
      </div>
      <span slot="time" class="time">{{ info.time }}</span>
    </article-outline>
  </div>
</template>
<script>
import { PhoneOutgoingIcon } from 'vue-feather-icons'
import articleOutline from './articleOutline.vue'
export default {
  components: {
    PhoneOutgoingIcon,
    articleOutline
  },
  data () {
    return {
      inputText: '',
      info: {
        type: 'Log Call',
        time: '12/12/2019 10:50:30am'
      }
    }
  },
  methods: {
    confirmLog () {
      if (!this.inputText) return
      this.$router.push({
        name: 'candidate',
        query: this.$route.id,
        params: {
          inputText: this.inputText,
          ...this.info
        }
      })
    }
  }
}
</script>
<style lang="less">
  .detail-log {
    .detail-log-title {
      position: relative;
      z-index: 100;
      background-color: #ffffff;
      color: @main-color;
      height: 69px;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        font-size: 24px;
        line-height: 32px;
        margin-left: 5px;
      }
    }
    .log-detail {
      position: relative;
      background-color: #ffffff;
      min-height: 370px;
      padding: 20px 10px 64px;
      .ivu-input {
        border: none;
      }
      //Chrome/Opera/Safari,
      textarea::-webkit-input-placeholder {
        // background-color: #FFFFFF;
        font: Italic 16px/21px Futura;
        color: #D6D6D6;
      }
      // Firefox 19+
      textarea::-moz-placeholder {
        font: Italic 16px/21px Futura;
        color: #D6D6D6;
      }
      // IE 10+
      textarea:-ms-input-placeholder {
        font: Italic 16px/21px Futura;
        color: #D6D6D6;
      }
      // Firefox 18-
      textarea:-moz-placeholder {
        font: Italic 16px/21px Futura;
        color: #D6D6D6;
      }
      // log button
      .btn-style {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        text-align: center;
        margin:auto;
        width: 95px;
        height: 33px;
        line-height: 33px;
        color: #FFFFFF;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 17px;
      }
      .disabled-btn {
        cursor: not-allowed;
        background: #CECECE;
      }
      .active-btn {
        background: #63D21F;
        cursor: pointer;
      }
      .ivu-input {
        font: 20px/27px Futura;
        color: #626262;
      }
      .ivu-input:focus {
        box-shadow: none;
      }
    }
    .time {
      font: 10px/13px Futura;
      color: #918E8E;
    }
    .feather-phone-outgoing {
      vertical-align: bottom;
    }
  }
</style>
