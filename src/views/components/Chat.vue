<template>
  <div style="width: 500px">
    <div style="display: flex">
      <img :src=storeImg alt="" width="100" height="100" style="border-radius: 30%; margin-left: 20px">

      <div style="padding: 20px">
        <div style="font-weight: 700; font-size: 20px">{{ storeName }}</div>
        <div style="font-weight: 400; font-size: 20px">{{ storeLocation }}</div>
      </div>

    </div>

    <hr>
  </div>


</template>

<script>
export default {
  name: "Chat",
  components: {},
  data() {
    return {
      items: []
    };
  },
  props: {
    storeImg: {
      type: String,
      default: ""
    },
    storeName: {
      type: String,
      default: ""
    },
    storeLocation: {
      type: String,
      default: ""
    },
    kakaoUrl: {
      type: String,
      default: ""
    },
  },
  methods: {},
  mounted() {

  }
}

</script>

<style scoped>

</style>