<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="app-view" />
      </keep-alive>
    </transition>
    <!-- <Button>iview</Button>
    <phone-outgoing-icon size="1.5x" class="custom-class"></phone-outgoing-icon> -->
    <Spin size="large" fix v-if="spinShow">
      <Icon type="ios-loading" size=40 class="spin-icon-loading"></Icon>
    </Spin>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: '',
      spinShow: false
    }
  },
  provide: function () {
    return {
      setTransName: this.setTransName,
      setLoading: this.setLoading
    }
  },
  methods: {
    setTransName (name) {
      this.transitionName = name
    },
    setLoading (value) {
      this.spinShow = value
    }
  }
}
</script>

<style lang="less">
 #app {
    .app-view {
      position: absolute;
      width: 100%;
    }
    .slide-trans-left-enter-active, .slide-trans-left-leave-active,
    .slide-trans-right-enter-active, .slide-trans-right-leave-active {
      transition: all 1s;
    }
    .slide-trans-left-enter {
      transform: translate(100%, 0);
    }
    .slide-trans-left-leave-to {
      transform: translate(-100%, 0);
    }
    .slide-trans-right-enter {
      transform: translate(-100%, 0);
    }
    .slide-trans-right-leave-to {
      transform: translate(100%, 0);
    }
 }
</style>
