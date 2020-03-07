<template>
  <div class="detail-basic-info">
    <div class="avatar-name">
      <img src="@/assets/img/avatar.png" width="98" height="98" alt="avatar">
      <div class="name-btn">
        <div class="name-tag">
          <span class="name">{{ info.name }}</span>
          <h-tag v-if="status=='open'" text="new"></h-tag>
        </div>
        <h-tag :text="btnProps.text"
          :color="btnProps.color"
          :backgroundColor="btnProps.backgroundColor"
          :border="btnProps.border"
          :otherStyle="{lineHeight: '16px', marginLeft: 0}"
          :clickable="status==='In Progress'"
          @onClick="onProgressClick">
        </h-tag>
      </div>
    </div>
    <div class="btn-list">
      <phone-outgoing-icon size="2x" class="custom-class" color="#6F50FF" @click="clickBtn"></phone-outgoing-icon>
      <mail-icon size="2x" class="custom-class" color="#6F50FF"></mail-icon>
      <message-square-icon size="2x" class="custom-class" color="#6F50FF"></message-square-icon>
      <calendar-icon size="2x" class="custom-class" color="#6F50FF"></calendar-icon>
      <file-plus-icon size="2x" class="custom-class" color="#6F50FF"></file-plus-icon>
    </div>
  </div>
</template>
<script>
import hTag from '../tag/index.vue'
import { PhoneOutgoingIcon, MailIcon, MessageSquareIcon, CalendarIcon, FilePlusIcon } from 'vue-feather-icons'
export default {
  props: {
    status: String
  },
  components: {
    hTag,
    PhoneOutgoingIcon,
    MailIcon,
    MessageSquareIcon,
    CalendarIcon,
    FilePlusIcon
  },
  data () {
    return {
      info: {
        name: 'John Chan'
      }
    }
  },
  computed: {
    btnProps () {
      console.log('status: ', this.status)
      switch (this.status) {
        case 'open':
          return {
            text: 'open',
            color: '#6A6A6A',
            backgroundColor: '#FFF',
            border: '2px solid #FDD15B'
          }
        case 'In Progress':
          return {
            text: 'In Progress',
            color: '#6A6A6A',
            backgroundColor: '#FDD35B',
            border: '2px solid #FDD15B'
          }
        case 'Hired':
          return {
            text: 'Hired',
            color: '#FFF',
            backgroundColor: '#63D01F ',
            border: '2px solid #63D21F'
          }
        default:
          return {
            text: 'open',
            color: '#6A6A6A',
            backgroundColor: '#FFF',
            border: '2px solid #FDD15B'
          }
      }
    }
  },
  methods: {
    clickBtn () {
      this.$emit('clickBtn', this.btnTxt)
    },
    onProgressClick () {
      this.$emit('confirmHire')
    }
  }
}
</script>
<style lang="less">
  .detail-basic-info {
    background-color: #FFFFFF;
    position: relative;
    z-index: 100; // make the shadow effective
    padding: 14px 27px 19px;
    box-shadow: 0px 3px 6px #00000029;
    height: 169px;
    display: flex;
    flex-direction: column;
    .avatar-name {
      display: inline-flex;
      .name-btn {
        display: inline-flex;
        flex-direction: column;
        padding-top: 23px;
        padding-left: 10px;
        .name-tag {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          .name {
            font-size: 26px;
            color: @text-color;
          }
        }
      }
    }
    .btn-list {
      display: inline-flex;
      justify-content: space-between;
      padding: 5px 8px;
    }
  }
</style>
