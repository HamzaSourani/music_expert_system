<template>
  <div class="home">
   <div class="opacity"></div>
   <router-view></router-view>
  </div>
  
</template>

<script>



export default {
  name: "Home"
  
};
</script>
<style scoped>
.home{
    width: 45%;
    height: 545px;
    position: relative;
    top: 10px;
    left: 28%;
    background-image: url("./../assets/th(5).png");
    background-size: cover;
   
}
.opacity{
   width: 100%;
   height: 545px;
   background-color: rgba(177, 3, 110,.7);
}
</style>