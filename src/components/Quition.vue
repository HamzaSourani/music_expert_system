<template>
  <div class="quition">
   <div class="quition_contianer" >
     <div class="border">
          <p>{{quition}}</p>
          
          <button class="yes_button" @click="answerYes()" > <span>Yes</span></button>
          <button class="no_button" @click="answerNo()"  > <span>No</span></button><br>
          <button class="submit" @click="putAnswer()"><span>SubMit</span></button>
          
        
     </div>
    </div>
    
    
  </div>  
</template>
<script>

export default {
   name:"Quition",
   data() {
     return {
       quition:"are you hungry",
       answer:"?",
       status:""
     }
   },
   mounted() {
     /*thisaxios.get('http://:8000/getQuition')
     .then((res)=>this.quition=res.result);
    */
   fetch('http://2f4922e1de3d.ngrok.io/getQuestion')
        .then(response => response.json())
        .then(response => {
        console.log(response);
        this.quition=response.result;
        
    });  
   },/*
   watch:{
     answer:function(v){
       console.log(v);
        fetch(`http://2f4922e1de3d.ngrok.io/putAnswer/${v}`,{method:"POST"})
       .then(response=>{response.json() })
       .then(response=>{console.log(response)});
     }
   },*/
     methods: {
     
    putAnswer: function(){
      /* this.axios.post(`http://2f4922e1de3d.ngrok.io/${this.answer}`)
       .then((res)=>this.answer=res.answer);
       if(this.answer!=""){
          axios.get('http://:8000/getQuition')
          .then((res)=>this.quition=res.result);
       }
       else{
         this.$store.state.isfinish=true;
         this.router.push("/c");
       }*/
      
       fetch('http://2f4922e1de3d.ngrok.io/getQuestion')
       .then((response)=>response.json())
          .then((response)=>{
            console.log(response);
          this.quition=response.result;
          this.status=response.statusCode;
          if(this.status=="202"){
           
         this.$router.push("/c");
          }
          }
          );
     },
      answerYes:function(){
       this.answer="yes";
       console.log(this.answer);
        fetch(`http://2f4922e1de3d.ngrok.io/putAnswer/yes`,{method:"POST"})
       .then(response=>response.json() )
       .then(response=>{console.log(response)});
       
       
     },
     answerNo: function(){
       this.answer="no";
       console.log(this.answer);
         fetch(`http://2f4922e1de3d.ngrok.io/putAnswer/no`,{method:"POST"})
       .then(response=>response.json() )
       .then(response=>{console.log(response)});
      
   },
   }
}
</script>
<style scoped>
*{
  box-sizing: border-box;
}

.border{
  width: 460px;
    position: absolute;
    left: 71px;
    top: 76px;
   height: 415px;
  background-color: rgba(44, 6, 19,.7);
  z-index: 2;
}

p{
  font-size: 25px;
  margin: 70px;
  color: rgb(123, 10, 216);
  overflow-wrap: break-word;
}
.yes_button, .no_button,.submit{
  width: 65px;
  height: 65px;
  margin-top: 25px;
  border: 3px solid rgb(253, 62, 4);
  background-color: rgba(0,0,0,0);
  font-size: 20px;
  
}
.submit{
  width: 210px;
  margin-top: 20px;
  border-color:rgb(123, 10, 216);
  font-size: 30px;
  font-weight: 500;
}
.no_button{
  margin-left: 75px;
  border: 3px solid rgb(241, 245, 9);
}

</style>