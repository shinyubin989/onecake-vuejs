

<template>
<div class="page">
  <div class="form-signin w-100 m-auto">
    <form @submit.prevent="signup">
      <img class="mb-4" src="@/assets/logo.png" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal" style="font-size: 33px; font-weight: 700">원케이크</h1>

      <div class="form-floating" style="margin-bottom: 10px;">
        <input type="text" class="form-control" id="userId" v-model.trim="userId" required >
        <label for="userId">아이디</label>
      </div>
      <div class="form-floating" style="margin-bottom: 10px;">
        <input type="password" class="form-control" id="password" v-model.trim="password" required >
        <label for="password">비밀번호</label>
      </div>
      <div class="form-floating" style="margin-bottom: 10px;">
        <input type="password" class="form-control" id="password-confirm" v-model.trim="passwordConfirm" required >
        <label for="password-confirm">비밀번호 확인</label>
      </div>
      <div class="form-floating" style="margin-bottom: 10px;">
        <input type="text" class="form-control" id="name" v-model.trim="name" required >
        <label for="name">이름</label>
      </div>
      <div class="form-floating" style="margin-bottom: 10px;">
        <input type="tel" class="form-control" id="phoneNumber" v-model.trim="phoneNumber" required >
        <label for="phoneNumber">전화번호</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit" style="background-color: #ff3096; margin-bottom: 70px;">회원가입</button>
      
    </form>
  </div>
</div>
  <!-- <main class="d-flex flex-nowrap">
    <div class="signup">
      <h1 class="signup__title">회원가입</h1>
      <form @submit.prevent="signup">
        <div class="row mb-3">
          <label for="userId" class="col-sm-2 col-form-label">아이디</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userId" v-model.trim="userId" required >
          </div>
        </div>
        <div class="row mb-3">
          <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" v-model.trim="password" required >
          </div>
        </div>
        <div class="row mb-3">
          <label for="password-confirm" class="col-sm-2 col-form-label">비밀번호 확인</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password-confirm" v-model.trim="passwordConfirm" required >
          </div>
        </div>
        <div class="row mb-3">
          <label for="name" class="col-sm-2 col-form-label">이름</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" v-model.trim="name" required >
          </div>
        </div>
        <div class="row mb-3">
          <label for="phoneNumber" class="col-sm-2 col-form-label">전화번호</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="phoneNumber" v-model.trim="phoneNumber" required >
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="background-color: #ff3096; outline:shadow !important;">회원가입</button>
      </form>
      <div class="signup__login">
        <span>이미 계정이 있으신가요?</span>
        <router-link to="/login">로그인</router-link>
      </div>
    </div>
  </main> -->
  
</template>

<script>
import axios from "axios";
import Sidebar from '@/views/Sidebar.vue';
// import '@/index.css'

export default {
  name: "Signup",
  data() {
    return {
      form: {
        name: '',
        userId: '',
        password: '',
        passwordConfirm: '',
        phoneNumber: ''
      }
    };
  },
  components: {
    Sidebar
  },
  methods: {
    signup() {
      axios.post('/api/v1/auth/signup', {
        name: this.name,
        user_id: this.userId,
        password: this.password,
        phone_number: this.phoneNumber,
        member_type: 'CONSUMER'
      })
      .then(response => {
        // 회원가입 성공 시 처리sdf
        this.$router.push('/login'); // 로그인 페이지로 이동
      })
      .catch(error => {
        // 회원가입 실패 시 처리
        console.log(error); // 에러 메시지 출력
      });
    },
  },
};
</script>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #fff;
  justify-content: center;
  text-align: center;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.signup {
  width: 60vh;
  height: 50vh;
  max-width: 50rem;
  margin: 5rem auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 2rem;
}

.signup__title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.signup__form {
  margin-bottom: 1rem;
}

.signup__button {
  margin-top: 1rem;
}

.signup__login {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}
.btn {
  border: none;
}
</style>

