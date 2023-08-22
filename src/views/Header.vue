<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" >
        <img src="@/assets/logo.png" width="40" height="32" />
        <span class="fs-4" style="color: #ff3096; font-weight: 600; margin-left: 15px">원케이크</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item" style="color: #ff3096"><a href="/" class="nav-link" aria-current="page">홈</a></li>
        <li class="nav-item" style="color: #ff3096"><a href="/stores" class="nav-link">가게</a></li>
        <li class="nav-item" style="color: #ff3096"><a href="/orders" class="nav-link">주문</a></li>
        <li class="nav-item" style="color: #ff3096"><a href="/chats" class="nav-link">상담</a></li>
        <li class="nav-item" style="color: #ff3096"><a href="#" class="nav-link">마이페이지</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
// import '@/index.css'
export default {
  name: 'Header',
}
</script>

<style scoped>
ul{
  color: #ff3096 !important;
}
.nav-item{
  color: #ff3096 !important;
}
.nav-link{
  color: #ff3096 !important;
}


</style>