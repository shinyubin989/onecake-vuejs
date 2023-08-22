<template>
  <div style="margin-left: 300px; margin-right: 300px">
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="@/assets/logo.png" alt="" width="72" height="57">
      <h2>주문서</h2>
      <p class="lead">필수 항목 기입을 완료한 후 '주문하기'버튼을 눌러주세요.</p>
    </div>

    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">가격</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{{ items.menuName }}</h6>
              <small class="text-body-secondary">갯수 : 1개</small>
            </div>
            <span class="text-body-secondary">{{items.menuPrice}}원</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>총합</span>
            <strong>{{items.menuPrice}}원</strong>
          </li>
        </ul>
      </div>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">개인 정보</h4>
        <form class="needs-validation" v-on:submit="submitForm(this)">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">이름</label>
              <input type="text" class="form-control" id="name" placeholder="" required v-model="form.name">
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">휴대폰 번호</label>
              <input type="tel" class="form-control" id="tel" placeholder="" required v-model="form.phoneNumber">
            </div>
            <div class="col-12">
              <label for="email" class="form-label">이메일 <span class="text-body-secondary">(선택사항)</span></label>
              <input type="email" class="form-control" id="email" placeholder="onecake@example.com">
            </div>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">결제</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" type="radio" class="form-check-input" checked required>
              <label class="form-check-label" for="credit">현장 결제</label>
            </div>
            <div class="form-check">
              <input id="debit" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="debit">계좌 이체</label>
            </div>
          </div>

          <hr class="my-4">

          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">퍼스널 옵션</h4>
            <div class="row g-3">
              <div class="col-sm-9">
                <label for="firstName" class="form-label">픽업날짜</label>
                <input type="date" class="form-control" id="date" placeholder="" required v-model="form.date">
              </div>
              <div class="col-sm-9">
                <label for="firstName" class="form-label">픽업시간</label>
                <input type="time" class="form-control" id="time" placeholder="" required v-model="form.time">
              </div>
              <div class="col-12">
                <label for="firstName" class="form-label">케이크 맛</label>
                <input type="text" class="form-control" id="taste" placeholder="" required v-model="form.taste">
              </div>
              <div class="col-12">
                <label for="firstName" class="form-label">배경 색상</label>
                <input type="text" class="form-control" id="background" placeholder="" v-model="form.background" required>
              </div>
              <div class="col-12">
                <label for="firstName" class="form-label">레터링 색상</label>
                <input type="text" class="form-control" id="color" placeholder="" required  v-model="form.color">
              </div>
              <div class="col-12">
                <label for="firstName" class="form-label">레터링 문구</label>
                <input type="text" class="form-control" id="lettering" placeholder="" required v-model="form.lettering">
              </div>
            </div>
          </div>
          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit" id="order" style="margin-bottom: 50px">주문하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import '@/index.css'
import StoreMenu from "@/views/components/StoreMenu.vue";
import { useToast } from "vue-toastification";

export default {
  name: "OrderSheet",
  components: {
    StoreMenu
  },
  data() {
    return {
      items: [],
      storeId : null,
      menuId : null,
      form: {
        date: '',
        time: '',
        name: '',
        phoneNumber: '',
        taste: '',
        background: '',
        color: '',
        lettering: ''
      }
    };
  },
  methods: {
    submitForm: function() {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      axios.post('/api/v1/consumer/stores/' + this.storeId + '/order/' + this.menuId, this.form, {headers})
      .then(response => {
        console.log(response.data)

      })
      .catch(error => {
        console.log(error); // 에러 메시지 출력
      })
      this.$router.push('/store/' + this.storeId);
      const toast = useToast();
      toast.success('주문이 완료되었습니다!', {
        position: 'bottom-right',
        timeout: 3000, // 토스트가 보여지는 시간 (밀리초 단위)
      });

    },
  },
  mounted() {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    axios.get('/api/v1/consumer/stores/' + this.storeId + '/order/' + this.menuId, {
      headers : headers,
    })
    .then(response => {
      this.items = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  },
  created() {
    this.storeId = this.$route.params.storeId
    this.menuId = this.$route.params.menuId
  },
}
</script>

<style scoped>

</style>