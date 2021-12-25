<template>
  <div class="video">
    
    <div v-for="(video,index) in videos" :key="index">
    <youtube :video-id=video></youtube>
    </div>
    <youtube :video-id=videos[0]></youtube>
  </div>
  
</template>
<script>

export default {
  data() {
    return {
 
    videos:new Array(20)
    }
  },mounted() {
       fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.$store.state.musicType}&type=video&key=AIzaSyCeMVHFIdN_HE5fQ2GFW-hdq5m7VIWXLGs`)
       .then(res=>res.json())
       .then(res=>{
           for(var i=0;i<20;i++){
               this.videos[i]=res.items[i].id.videoId
           }
           console.log(this.videos)
        } );
   },
  methods: {
    
  }
}
</script>
<style scoped>
.video{
  margin-top: 20px;
}
</style>
