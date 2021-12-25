<template>
    <div class="start" >
      <button class="start_button" @click="startQ()">start</button>
    </div>
</template>
<script>
export default {
    name:"Start",
    data() {
      return {
        result:""
      }
    },
    methods: {
      startQ: function(){
       /*this.axios.post('http://311beb171a8b.ngrok.io/startAction')
        .then((response)=>this.result = response.statusCode);*/
        fetch('http://2f4922e1de3d.ngrok.io/startAction',{method:'POST'})
        .then(response => response.json())
        .then(response => {
        console.log(response)
        this.result = response.statusCode;
        console.log(this.result);
        if(this.result=="200")
        this.$router.push('q');
    });
       
      }
    },
    
}
</script>
<style lang="scss" scoped>
.start{
    position: absolute;
    top: 70px;
    left: 45%;
}
.start_button{
    display: inline-block; 
    width: 75px;
    height: 75px;
    margin-top: 207px;
    border-radius: 50%;
    background-color: rgba(177, 3, 110,.7);
    color: rgb(48, 0, 16);
    font-size: 25px;
    border: 0px solid rgb(233, 88, 146) ;
    box-shadow: -3px -1px 8px 2px rgb(233, 88, 146), 3px 4px 8px 2px  rgb(233, 88, 146);
}
.start_button:hover{
  transform: scale(1.3,1.3);
}

</style>