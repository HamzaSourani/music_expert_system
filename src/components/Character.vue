<template>
    <div class="character">
      <p class="state">{{char}}</p>
      <p class="discreption">{{description}}</p>
      <button @click="Go()">Go =></button>
    </div>
</template>
<script>
export default {
    name:"Character",
    data() {
      return {
        char:"name_of_character",
        description:"description",
        musicList:""
      }
    },
      
    mounted() {
      /*
      this.axios('http://:8000/getResult')
      .then((res)=>{
        this.char = res.character;
        this.description = res.description;
        this.musicList = res.musicList;
      })*/
      fetch("http://2f4922e1de3d.ngrok.io/getResult")
      .then(response=>response.json())
      .then(Response=>{
         this.char = Response.character;
         this.description = Response.description;
         this.musicList = Response.musicList;
        /* this.$store.state.musicType=Response.musicList[0];*/
       this.$store.commit("addtype",Response.musicList[0]);
         console.log(this.$store.state.musicType)
      });
    },
    methods: {
      Go: function(){
        this.$router.push('/video');
      }
    },
}
</script>
<style lang="scss" scoped>
.character{
   width: 460px;
    position: absolute;
    left: 71px;
    top: 76px;
   height: 435px;
  background-color: rgba(44, 6, 19,.7);
  z-index: 1;
}
p{
  font-size: 25px;
  margin: 70px;
  color: rgb(123, 10, 216);
  overflow-wrap: break-word;
}
button{
  width: 65px;
  height: 65px;
  margin-top: 10px;
  border: 3px solid rgb(253, 62, 4);
  background-color: rgba(0,0,0,0);
  font-size: 20px;
  color: rgb(241, 245, 9);
}
</style>