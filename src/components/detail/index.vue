<template>
  <div class="detail">
    <header-com></header-com>
    <transition :name="detailTransName" :duration="duration">
      <keep-alive>
        <router-view class="app-view" />
      </keep-alive>
    </transition>
   </div>
</template>
<script>
import headerCom from './headerCom.vue'
import sectionCom from './sectionCom.vue'
export default {
  components: {
    headerCom,
    sectionCom
  },
  data () {
    return {
      detailTransName: '',
      duration: 1000
    }
  },
  watch: {
    $route (newValue) {
      console.log('$route: ', newValue)
      const name = this.$route.name
      if (name === 'log') {
        this.detailTransName = 'detail-Trans-left'
        this.duration = 1000
      } else if (name === 'candidate') {
        this.detailTransName = 'detail-Trans-right'
        this.duration = 1000
      } else {
        this.detailTransName = ''
      }
    }
  }
}
</script>
<style lang="less">
  .app-view {
    position: absolute;
    width: 100%;
  }
  .detail-Trans-left-enter-active, .detail-Trans-left-leave-active {
    .detail-basic-info, .Activities-detail, .feather-phone-outgoing, .detail-log-title-content {
      transition: all 1s;
    }
    .contact-detail-outline, .Activities-title, .log-detail {
      transition: all 1s;
    }
    .log-call-detail {
      transition: all 1s;
    }
    .detail-log-title {
      transition: all 2s;
    }
  }
  .detail-Trans-left-enter {
    .detail-log-title-content {
      opacity: 0;
      transform: translate(-40vw, 20vh);
    }
    .detail-log-title {
      opacity: 0;
    }
    .log-call-detail {
      transform: translateY(20px);
      opacity: 0;
    }
    .log-detail {
      opacity: 0;
    }
  }
  .detail-Trans-left-leave-to {
    .detail-basic-info {
      opacity: 0;
      height: 69px;
    }
    .Activities-detail {
      position: absolute;
      bottom: 0;
      width: 100%;
      opacity: 0;
      height: 340px;
    }
    .contact-detail-outline {
      opacity: 0;
    }
    .Activities-title {
      opacity: 0;
    }
    .feather-phone-outgoing {
      transform: translate(20vw, -10vh);
      opacity: 0.5;
    }
  }
  // detail-Trans-right
  .detail-Trans-right-enter-active, .detail-Trans-right-leave-active {
    .detail-basic-info, .Activities-detail, .feather-phone-outgoing, .detail-log-title-content {
      transition: all 1s;
    }
    .contact-detail-outline, .Activities-title {
      transition: all 1s;
    }
    .log-call-detail {
      transition: all 1s;
    }
    .detail-log-title {
      transition: all 2s;
    }
    .log-detail {
      transition: all 0.5s;
    }
  }
  .detail-Trans-right-enter {
    .detail-basic-info {
      opacity: 0;
      height: 69px;
    }
    .Activities-detail {
      height: 340px;
      position: absolute;
      width: 100%;
      bottom: 0;
      opacity: 0;
    }
    .contact-detail-outline {
      opacity: 0;
    }
    .Activities-title {
      opacity: 0;
    }
    .feather-phone-outgoing {
      transform: translate(20vw, -10vh);
      opacity: 0.5;
    }
  }
  .detail-Trans-right-enter-to {
    .Activities-detail {
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }
  .detail-Trans-right-leave-to {
    .detail-log-title-content {
      opacity: 0;
      transform: translate(-40vw, 20vh);
    }
    .detail-log-title {
      opacity: 0;
    }
    .log-call-detail {
      transform: translateY(20px);
      opacity: 0;
    }
    .log-detail {
      opacity: 0
    }
  }
</style>
