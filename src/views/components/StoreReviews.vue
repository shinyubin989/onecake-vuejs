
<template>
  <div style="margin-top:20px; padding-left:10px; padding-right:10px;">
    <div style="padding: 30px;">
      <h3 style="margin-bottom:30px; font-weight:600">최근 리뷰 {{items.reviewNum}}개</h3>
      <StoreReview v-for="(review, index) in items.reviews" :key="index" :content="review.content" :profileImg="review.profileImg" :timeHistory="review.timeHistory" :userName="review.userName" :image="review.image"/>
  
    </div>
    </div>
</template>
<!--
[
  {
    "image": "string",
    "menuDescription": "string",
    "menuName": "string",
    "price": 0
  }
]
-->
<script>
import axios from "axios";
import '@/index.css'
import StoreReview from "@/views/components/StoreReview.vue"

export default {
  name: "StoreReviews", 
  components: {
    StoreReview
  },
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
    axios.get('/api/v1/consumer/stores/review/' + this.id , {
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
