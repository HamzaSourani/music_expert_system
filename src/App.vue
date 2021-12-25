<template>
  <div id="app" >
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/video"></router-link>
      
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 32px;
  box-shadow: 0px 5px 20px #e95892;
    border-radius: 20% 0%;
    width: 40%;
    margin-left: 28%;
    background-color:  rgba(177, 3, 110,.7);

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-left: 20px;
    font-size: 25px;
    &.router-link-exact-active {
      color: #300010;
      text-decoration: none;
    }
  }
}
</style>
