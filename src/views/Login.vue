<template>
<div class="page">
  <div class="form-signin w-100 m-auto">
    <form @submit.prevent="login">
<<<<<<< HEAD
      <img class="mb-4" src="@/assets/logo.png" alt="" width="72" height="57">
=======
      <img class="mb-4" src="@/assets/onecakeLogo.png" alt="" width="72" height="57">
>>>>>>> 7a754c4440863e87f02815dc11a3ecb9580604a1
      <h1 class="h3 mb-3 fw-normal" style="font-size: 33px; font-weight: 700">원케이크</h1>

      <div class="form-floating" style="margin-bottom: 10px;">
        <input type="text" class="form-control" id="userId" v-model.trim="userId" required >
        <label for="userId">아이디</label>
      </div>
      <div class="form-floating" style="margin-bottom: 10px;">
        <input type="password" class="form-control" id="password" v-model.trim="password" required >
        <label for="password">비밀번호</label>
      </div>


      <button class="w-100 btn btn-lg btn-primary" type="submit" style="background-color: #ff3096; margin-bottom: 70px;">로그인</button>
      
    </form>
    <div class="login__signup">
      <span>계정이 없으신가요?</span>
      <router-link to="/signup">회원가입</router-link>
    </div>
    
  </div>
</div>
  <!-- <div class="login">
    <h1 class="login__title">로그인</h1>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="id" class="form-label">아이디</label>
        <input type="text" class="form-control" id="id" aria-describedby="id" v-model.trim="id" required >
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input type="password" class="form-control" id="password" v-model.trim="password" required >
      </div>
      <button type="submit" class="btn btn-primary shadow-none" style="background-color: #ff3096; outline:shadow !important;">로그인</button>
    </form> -->
    <!-- <div class="login__signup">
      <span>계정이 없으신가요?</span>
      <router-link to="/signup">회원가입</router-link>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.post('api/v1/auth/login', {
        user_id: this.userId,
        password: this.password,
      })
      .then(response => {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        this.$router.push("/main");
        // 회원가입 성공 시 처리sdf
        // this.$router.push('/login'); // 로그인 페이지로 이동
      })
      .catch(error => {
        // 회원가입 실패 시 처리
        console.log(error); // 에러 메시지 출력
      });
    },
  },
  // methods: {
  //   async login() {
  //     try {
  //       const response = await axios.post("api/v1/auth/login", {
  //         user_id: this.id,
  //         password: this.password,
  //       });

  //       localStorage.setItem("accessToken", response.data.accessToken);
  //       localStorage.setItem("refreshToken", response.data.refreshToken);

  //       this.$router.push("/");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  // },
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

.login {
  max-width: 25rem;
  margin: 5rem auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 2rem;
}

.login__title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.login__form {
  margin-bottom: 1rem;
}

.login__button {
  margin-top: 1rem;
}

.login__signup {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}
.btn {
  border: none;
}
</style>