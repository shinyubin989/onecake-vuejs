<template>

  <div style="padding: 70px;">
    <h2 style="font-weight:700">영업정보</h2>
    <div style="margin-top:50px;"/>
    <table class="table table-borderless" style="font-size:25px;">
      <tbody>
        <tr>
          <th scope="row">운영시간</th>
          <td colspan="3">{{items.operatingTime}}</td>
        </tr>
        <tr>
          <th scope="row">휴무일</th>
          <td colspan="3">{{items.dayOff}}</td>
        </tr>
        <tr>
          <th scope="row">주소</th>
          <td colspan="3">{{items.address}}</td>
        </tr>
        <tr>
          <th scope="row">가게 설명</th>
          <td colspan="3">{{items.storeDescription}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!--
{
  "address": "string",
  "dayOff": "string",
  "operatingTime": "string",
  "storeDescription": "string"
}
-->
<script>
import axios from "axios";
import '@/index.css'

export default {
  name: "StoreInfo", 
  data() {
    return {
      items: []
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('api/v1/consumer/stores/' + this.id + '/storeInfo', { 
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
