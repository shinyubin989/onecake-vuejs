<template>
  {{ id }}
  {{ item.storeName }}

</template>

<script>
import axios from "axios";
import '@/index.css'

export default {
  name: "StoreMain",
  components: {
  },
  data() {
    return {
      item: []
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  // methods: {
  //   filterPopular() {
  //     const accessToken = localStorage.getItem('accessToken');
  //     const headers = {
  //       Authorization: `Bearer ${accessToken}`
  //     };
  //     axios.get('api/v1/consumer/stores/main', {headers})
  //     .then(response => {
  //       this.items = response.data;
  //     })
  //     .catch(error => {
  //       // 회원가입 실패 시 처리
  //       console.log(error); // 에러 메시지 출력
  //     });
  //   },
  // },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('api/v1/consumer/stores/' + this.id + '/mainInfo', { 
      headers : headers,
      })
      .then(response => {
        this.item = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    // this.filterPopular();
  }
}
</script>

<style scoped>


</style>
