<template>
  <div class="container">
    <Header />
    <!-- <div class="d-flex flex-nowrap"> -->
    <!-- <Sidebar /> -->
    <div class="slides">
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/>
            <image href="https://www.tastingtable.com/img/gallery/30-types-of-cake-explained/l-intro-1658850950.jpg" width="100%" style="object-fit: cover; object-position: 100% 100%;"/>
          </svg> 
          <div class="container">
            <div class="carousel-caption text-start">
              <h1 style="text-shadow: 4px 4px 4px gray;">이번주 Hot한 케이크</h1>
              <p style="text-shadow: 4px 4px 4px gray;">오늘의 가장 인기있는 케이크를 찾아보세요!</p>
              <!-- <p><a class="btn btn-lg btn-primary" href="#">첫번째 버튼</a></p> -->
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/>
            <image href="https://www.thespruceeats.com/thmb/E0Q3SaCQMH6PviqKkQMplfC8xQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/opera-cake-recipe-1375077-hero-01-8eb02413b81c4d2b978fd7d2a8fb4d7f.jpg" width="100%" style="object-fit: cover; object-position: 100% 100%;"/>
          </svg> 
          <div class="container">
            <div class="carousel-caption">
              <h1 style="text-shadow: 4px 4px 4px gray;">이번주 Hot한 케이크</h1>
              <p style="text-shadow: 4px 4px 4px gray;">오늘의 가장 인기있는 케이크를 찾아보세요!</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/>
            <image href="https://ichef.bbci.co.uk/images/ic/1280xn/p0d9wyz7.jpg" width="100%" style="object-fit: cover; object-position: 100% 100%;"/>
          </svg> 
          <div class="container">
            <div class="carousel-caption text-end">
              <h1 style="text-shadow: 4px 4px 4px gray;">이번주 Hot한 케이크</h1>
              <p style="text-shadow: 4px 4px 4px gray;">오늘의 가장 인기있는 케이크를 찾아보세요!</p>
              <!-- <p><a class="btn btn-lg btn-primary" href="#">세번째 버튼</a></p> -->
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>


  <div class="b-example-divider"></div>

  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom" style="font-weight: 700">내가 찾는 기념일 케이크</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col" style="height: 380px">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://i.pinimg.com/564x/e3/c6/9d/e3c69dc9b4a90099d5a27f75db226aa1.jpg');">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="mb-4 display-6 lh-1 fw-bold">#취업</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://i.pinimg.com/564x/d1/36/65/d13665c96bef4ffa5d06df458eaf2de5.jpg');">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="mb-4 display-6 lh-1 fw-bold">#생일</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://i.pinimg.com/564x/da/42/17/da4217a11ae54472bb1b56940f8212d4.jpg'); ">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="mb-4 display-6 lh-1 fw-bold">#결혼</h3>
            
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
    
  
</template>

<script>
import axios from "axios";
import Sidebar from '@/views/Sidebar.vue';
import Header from '@/views/Header.vue';
import '@/index.css'

export default {
  name: "Main",
  components: {
    Sidebar,
    Header
  },
}
</script>

<style scoped>
.slides{
  width: 100%;
}
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}


</style>
