<template>
  <Header/>

  <div style="margin: 100px 200px; ">
    <h1 style="text-align: center; font-weight: 700; margin-bottom: 70px">나의 주문내역</h1>
    <div style="display: flex; justify-content : center;">
      <div>
        <Order v-for="item in items"
               :key="item.orderHistoryId"
               :orderHistoryId="item.orderHistoryId"
               :storeName="item.storeName"
               :orderState="item.orderState"
               :menuName="item.menuName"
               :menuPrice="item.menuPrice"
               :menuImage="item.menuImage"
               :hasReview="item.hasReview"
        style="margin-bottom: 30px;"
        />
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import Order from "@/views/components/Order.vue"
import Header from "@/views/Header.vue";

export default {
  name: "Orders",
  components: {
    Order,
    Header
  },
  data() {
    return {
      items: []
    };
  },
  props: {
  },
  methods: {
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('/api/v1/consumer/orderHistory', {
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