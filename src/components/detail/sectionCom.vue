<template>
  <section class="detail-section-wraper">
    <div class="basic-info-wraper">
      <basic-info @clickBtn="clickBtn" @confirmHire="confirmHire" :status="activities[0].status"></basic-Info>
    </div>
    <article-outline articleTitle="Contact Detail" btnTxt="Edit" class="contact-detail-outline" @clickBtn="clickBtn">
      <div class="contact-detail common-box-shadow zIndex90">
        <div class="item">
          <span class="item-title">Email</span><span class="item-content">{{ info.email }}</span>
        </div>
        <div class="item">
          <span class="item-title">Phone</span><span class="item-content">{{ info.phone }}</span>
        </div>
      </div>
    </article-outline>
    <article-outline articleTitle="Activities" titleClass="Activities-title" :class="activities.length == 2 ? 'activities-outline':'activities-outline-auto'">
        <div :class="[activities.length == 2 ? 'Activities-detail':'Activities-detail-auto', 'common-box-shadow', 'zIndex80']">
          <Timeline>
            <transition :name="activities.length == 4 ? 'hired-trans-last' : ''">
            <TimelineItem color="#646464" v-if="activities.length == 4">
                <Icon type="ios-add-circle-outline" slot="dot" size="29" v-if="activities[0].title=='New contact created'"/>
                <Icon type="md-document" slot="dot" size="31"  v-else-if="activities[0].title=='Form Filled'"/>
                <Icon type="ios-call"  slot="dot" size="31"  v-else-if="activities[0].title=='Call'"/>
                <award-icon size="2.4x" slot="dot" color="#63D21F" class="custom-class" v-else-if="activities[0].title=='Hired'"></award-icon>
                <div class="activities-content">
                  <div class="activities-content-title">
                    {{ activities[0].title }}
                  </div>
                  <div class="activities-content-time">
                    {{ activities[0].time }}
                  </div>
                  <div class="activities-content-detail" v-if="activities[0].detail">
                    {{ activities[0].detail }}
                  </div>
                </div>
            </TimelineItem>
            </transition>
            <transition-group :name="activities.length >= 3 ? 'hired-trans-other' : ''">
            <TimelineItem color="#646464" v-for="item in restActivities" :key="item.time + new Date().valueOf()">
                <Icon type="ios-add-circle-outline" slot="dot" size="29" v-if="item.title=='New contact created'"/>
                <Icon type="md-document" slot="dot" size="31"  v-else-if="item.title=='Form Filled'"/>
                <Icon type="ios-call"  slot="dot" size="31"  v-else-if="item.title=='Call'"/>
                <award-icon size="2.4x" slot="dot" color="#63D21F" class="custom-class" v-else-if="item.title=='Hired'"></award-icon>
                <div class="activities-content">
                  <div class="activities-content-title">
                    {{ item.title }}
                  </div>
                  <div class="activities-content-time">
                    {{ item.time }}
                  </div>
                  <div class="activities-content-detail" v-if="item.detail">
                    {{ item.detail }}
                  </div>
                </div>
            </TimelineItem>
            </transition-group>
          </Timeline>
        </div>
    </article-outline>
    <transition name="fade">
      <div class="modal" v-show="showModal" >
        <div class="modal-btn-wraper">
          <div class="modal-btn-list">
          <div class="modal-btn" @click="onModalClick('hired')">Mark as Hired</div>
            <div class="modal-btn">Follow Up</div>
          </div>
          <div class="modal-cancel-btn" @click="onModalClick('cancel')">Cancel</div>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
import basicInfo from './basicInfo.vue'
import articleOutline from './articleOutline.vue'
import { AwardIcon } from 'vue-feather-icons'
export default {
  components: {
    basicInfo,
    articleOutline,
    AwardIcon
  },
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showModal: false,
      info: {
        email: 'john@gmail.com',
        phone: '09969712111'
      },
      activities: [
        // {
        //   title: 'Call',
        //   time: '12/12/2019 11:50:30am',
        //   detail: 'Asked technical questions',
        //   status: 'In Process'
        // },
        {
          title: 'New contact created',
          time: '12/12/2019 10:59:31am',
          status: 'Open'
        },
        {
          title: 'Form Filled',
          time: '12/12/2019 10:59:00am',
          status: 'Open'
        }
      ]
    }
  },
  computed: {
    restActivities () {
      const activities = [ ...this.activities ]
      if (activities.length === 4) {
        activities.shift()
      }
      return activities
    }
  },
  methods: {
    clickBtn () {
      if (this.activities.length > 2) return
      this.$router.push({
        path: '/detail/log',
        query: {
          id: this.$route.query.id
        }
      })
    },
    addActivities (activity) {
      this.activities.unshift(activity)
    },
    // show hire modal
    confirmHire () {
      this.showModal = true
      console.log('this.showModal: ', this.showModal)
    },
    // modal btn event
    onModalClick (type) {
      if (type === 'cancel') {
        this.showModal = false
      } else if (type === 'hired') {
        this.addActivities(
          {
            title: 'Hired',
            time: '12/12/2019 12:15:31am',
            detail: 'A quick win!',
            status: 'Hired'
          }
        )
        this.showModal = false
      }
    }
  },
  watch: {
    $route (newValue) {
      const name = this.$route.name
      if (name === 'candidate') {
        if (newValue.params && newValue.params.type) {
          console.log('newValue.params: ', newValue.params)
          const { inputText, type, time } = newValue.params
          this.addActivities(
            {
              title: type === 'Log Call' ? 'Call' : '',
              time,
              detail: inputText,
              status: 'In Progress'
            }
          )
        }
      }
    }
  },
  mounted () {
    window.vmSection = this
  }
}
</script>
<style lang="less">
  .Activities-detail {
    height: 135px;
  }
  .Activities-detail-auto {
    height: auto;
  }
  .detail-section-wraper {
    position: absolute;
    .contact-detail {
      background-color: #FFFFFF;
      padding: 20px;
      .item {
        font-size: 16px;
        line-height: 21px;
        color: #646464;
        padding-bottom: 12px;
        &-title {
          display: inline-block;
          width: 68px;
        }
        &-content {
          color:#9B9B9B;
          width: 68px;
        }
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
    .Activities-detail, .Activities-detail-auto {
      background-color: #FFFFFF;
      padding: 15px 20px 0 38px;
      .activities-content {
        padding-left: 30px;
        &-title {
          color: #646464;
          font-size: 16px;
          line-height: 21px;
          padding-bottom: 3px;
        }
        &-time {
          color: #918E8E;
          font-size: 10px;
          line-height: 13px;
        }
        &-detail {
          margin-top: 5px;
          font: Italic 12px/15px Futura;
          color: #918E8E;
        }
      }
    }
    .zIndex90 {
      z-index: 90;
    }
    .zIndex80 {
      z-index: 80;
    }
    .ivu-icon-ios-add-circle-outline {
      font-weight: bold;
    }
    .ivu-timeline-item-head-custom {
      margin-top: 12px;
    }
    .ivu-timeline-item-tail {
      border-left: 2px solid #7D50FF;
      height: 60%;
      top: 40%;
      z-index: 100;
    }
    // these classes are uesed for animation
    .basic-info-wraper {
      height: 169px;
    }
    .activities-outline {
      height: 178px;
    }
    .activities-outline-auto {
      height: auto;
    }
    // modal style
    .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #00000066;
      z-index: 1000;
      display: flex;
      .modal-btn-wraper {
        display: flex;
        flex-grow: 1;
        align-self: flex-end;
        flex-direction: column;
        .modal-btn-list {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin: 9px;
          text-align: center;
          font: 20px/24px SF Pro Text;
          color: #007AFF;
          background-color: #DDD;
          border-radius: 10px;
          .modal-btn {
            cursor: pointer;
            height: 62px;
            line-height: 62px;
            border-bottom: 1px solid #BBB;
          }
        }
        .modal-cancel-btn {
          text-align: center;
          font: 20px SF Pro Text;
          color: #007AFF;
          background: #FFFFFF;
          height: 62px;
          line-height: 62px;
          border-radius: 10px;
          margin:9px 9px 51px 9px;
        }
      }
    }
  }
</style>
