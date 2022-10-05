<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span @click="about"><h1>about</h1></span>
    <span @click="builds"><h1>builds</h1></span>
    <span @click="login"><h1>login</h1></span>
    <span @click="test"><h1>test</h1></span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    about(){
      this.$router.push({ path: 'about' });
    },
    builds(){
      this.$router.push({ path: 'builds' });
    },
    login(){
      this.$router.push({ path: 'login' });
    },
    test(){
      this.$router.push({ path: 'test' });
    },
  }
}
</script>
