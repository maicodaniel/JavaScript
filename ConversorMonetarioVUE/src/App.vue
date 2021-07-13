<template>
  <div id="app">
    <div class="line">
      <h1>Bem Vindo</h1>
    </div>
    <div>
       <p>BRL = Real, USD = Dolar Americano,  CAD = Dolar Canadense,  GBP = Libra,  BTC = BitCoin</p>
    </div>
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
     <div class="line">
      <Conversor m1="BTC" m2="BRL"/>
      <Conversor m1="BRL" m2="BTC"/>
    </div>
    <div>
      <a href="https://icons8.com/icon/45300/seta-longa-à-direita">Seta longa à direita icon by Icons8</a>
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
