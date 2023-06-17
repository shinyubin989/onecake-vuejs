<template>
  <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">케이크 이미지</text>
        <image :xlink:href="storeImage" width="100%" style="object-fit: cover; object-position: 100% 100%;"/>
      </svg>

      <div class="card-body">
        <p class="card-text">{{storeName}}</p>
        
        <div class="d-flex justify-content-between align-items-center">
          <!-- <div class="btn-group"> -->
            <!-- <button type="button" class="btn btn-sm btn-outline-secondary">좋아요</button> -->
            <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
          <!-- </div> -->
          <!-- <small class="text-muted">찜 395개</small> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    storeImage: {
      type: String,
      required: true
    },
    storeName: {
      type: String,
      required: true
    }
  }
};
</script>