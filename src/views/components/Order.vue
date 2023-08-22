<template>
  <div class="card shadow" style="width: 600px; padding: 60px; margin-bottom: 20px">
    <div style="display: flex">
      <img :src=menuImage alt="" width="100" height="100" style="border-radius: 30%; margin-left: 20px">
      <div style="margin-left: 40px; padding-top: 10px">
        <div>
          <span style="font-size: 25px; font-weight: 600">{{ storeName }}&nbsp;&nbsp;</span>
          <span style="font-size: 25px; font-weight: 600; color: #ff3096" v-if = "orderState==='RECEIVED'">주문 접수</span>
          <span style="font-size: 25px; font-weight: 600; color: #ff3096" v-if = "orderState==='ACCEPTED'">주문 완료</span>
          <span style="font-size: 25px; font-weight: 600; color: #ff3096" v-if = "orderState==='MAKING'">제작 중</span>
          <span style="font-size: 25px; font-weight: 600; color: #ff3096" v-if = "orderState==='PICKEDUP'">픽업 완료</span>
        </div>
        <div>
          <span style="font-size: 20px; font-weight: 500; color: grey">{{ menuName }}&nbsp;&nbsp;{{menuPrice}}원</span>
        </div>

      </div>
    </div>

    <div style="margin-top: 20px;">
      <div class="progress">
        <div v-if = "orderState==='RECEIVED'" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div>
        <div v-if = "orderState==='ACCEPTED'" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
        <div v-if = "orderState==='MAKING'" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        <div v-if = "orderState==='PICKEDUP'" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
      </div>
    </div>

    <div>
      <div class="d-grid gap-2 col-12 mx-auto" style="margin-top: 20px">
        <b-button id="show-btn" @click="orderDetail(orderHistoryId)" variant="outline-secondary">주문상세</b-button>
      </div>
    </div>
  </div>




  <b-modal ref="my-modal" v-model="modalShow" hide-footer>
    <div style="padding-left: 15px; padding-top: 15px; padding-bottom: 15px">
      <p v-model="items.orderState" style="color: #ff3096; font-size: 20px; font-weight: 600">{{ items.orderState }}</p>
      <div style="font-weight: 700; font-size: 25px">{{ items.storeName }}</div>
      <div style="font-size: 18px; font-weight: 500; color:#999999">주문일시:&nbsp;{{ items.orderTime }}</div>
      <div style="font-size: 18px; font-weight: 500; color:#999999">픽업날짜:&nbsp;{{ items.pickUpTime }}</div>
    </div>

    <div style="background-color: #F3F3F3; height: 15px" />

    <div style="padding: 30px 15px">
      <div style="margin-bottom:10px; display: flex; justify-content: space-between">
        <div style="font-weight: 500; font-size: 20px">{{ items.menuName }}</div>
        <div style="font-weight: 500; font-size: 20px">{{ items.menuPrice }}&nbsp;원</div>
      </div>
      <div>
        <ul>
          <li v-for="item in items.form" style="font-weight: 500; font-size: 18px; color: #9E9E9E">{{item}}</li>
        </ul>
      </div>
    </div>
  </b-modal>
</template>

<script>
import axios from "axios";

export default {
  name: 'Order',
  data() {
    return {
      items: [],
      modalShow: false
    };
  },
  props: {
    orderHistoryId: {
      type: Number,
      default: 0
    },
    storeName: {
      type: String,
      default: "store"
    },
    orderState: {
      type: String,
      default: "RECEIVED"
    },
    menuName: {
      type: String,
      default: "menu"
    },
    menuPrice: {
      type: Number,
      default: 0
    },
    menuImage: {
      type: String,
      default: "image"
    },
    hasReview: {
      type: Boolean,
      default: false
    }
  },
  methods: {

    orderDetail(orderHistoryId){
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      axios.get('/api/v1/consumer/orderHistory/' + orderHistoryId, {
        headers : headers,
      })
      .then(response => {
        this.items = response.data;
        this.modalShow = true
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

<style scoped>
.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: white;
  text-align: center;
  white-space: nowrap;
  background-color: #ff3096;
  @include transition(var(--#{$prefix}progress-bar-transition));
}
</style>