<template>
  <div class="list-list-item">
    <div class="basic-info">
      <div class="name-tag">
        <div class="name">{{ name }}</div>
        <h-tag text="New" v-if="status=='open'"></h-tag>
      </div>
      <div class="email">{{ email }}</div>
    </div>
    <div class="btn-area" @click="viewDetail(email)">
      <phone-outgoing-icon size="1.8x" class="custom-class" color="#6F50FF"></phone-outgoing-icon>
      <mail-icon size="2x" class="custom-class ml25" color="#6F50FF"></mail-icon>
    </div>
  </div>
</template>
<script>
import { PhoneOutgoingIcon, MailIcon } from 'vue-feather-icons'
import hTag from '../tag/index.vue'
export default {
  inject: ['setTransName'],
  components: {
    PhoneOutgoingIcon,
    MailIcon,
    hTag
  },
  props: {
    name: String,
    email: String,
    status: String,
    phone: String
  },
  data () {
    return {
    }
  },
  methods: {
    viewDetail (email) {
      this.setTransName('slide-trans-left')
      this.$router.push({
        path: '/detail/candidate',
        query: {
          id: email
        }
      })
    }
  }
}
</script>
<style lang="less">
  .list-list-item {
    display: flex;
    align-items: center;
    height: 91px;
    padding: 0 19px 0 31px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-bottom: 1px solid #00000229;

    &:last-child {
      border-bottom: none;
    }

    .basic-info {
      display: inline-flex;
      flex-direction: column;
      flex-grow: 1;
      .name-tag {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        .name {
          font-size: @name-font;
          // font-weight: bold;
        }
      }
      .email {
        color: @pure-text-color;
      }
    }
    .btn-area {
      display: inline-flex;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
</style>
