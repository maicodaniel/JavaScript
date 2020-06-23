<template>
  <div id="app">
    <div class="line">
      <Conversor m1="USD" m2="BRL"/>
      <Conversor m1="BRL" m2="USD"/>
    </div>
    <div class="line">
      <Conversor m1="CAD" m2="BRL"/>
      <Conversor m1="BRL" m2="CAD"/>
    </div>
    <div class="line">
      <Conversor m1="GBP" m2="BRL"/>
      <Conversor m1="BRL" m2="GBP"/>
    </div>
    
    
  </div>
</template>

<script>
import Conversor from "./components/Conversor.vue";

export default {
  name: 'App',
  components: {
    Conversor
  }
}
</script>

<style>
#app {
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.line {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}
</style>
