<template>
  <div style="margin-left: 200px; margin-right: 200px;">
    <h1 style="text-align: center; padding-top: 100px; margin-bottom:20px; font-weight: 700; color: #333333">주문상세</h1>
    <div style="background-color: #F3F3F3; height: 15px" />


    <div style="padding-left: 15px; padding-top: 30px; padding-bottom: 30px">
      <p style="color: #ff3096; font-size: 20px; font-weight: 600">{{ items.orderState }}</p>
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

  </div>
</template>

<script>
import axios from "axios";
import Order from "@/views/components/Order.vue";

export default {
  name: 'SpecificOrder',
  components: {Order},
  data() {
    return {
      items: [],
      id: null
    };
  },
  methods: {
  },
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('/api/v1/consumer/orderHistory/' + this.id, {
      headers : headers,
    })
    .then(response => {
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  }
}
</script>

<style scoped>

</style>