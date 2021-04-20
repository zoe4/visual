<template>
  <div class="home">
    <Header/>
    
   



  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
    return {

    }
  },
  methods:{
    getTest(){
      this.$api.getTest().then(result => {
            console.log(result)
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  box-sizing: border-box;
  width:100vw;
  height:100vh;
  background: url('~@/assets/img/bg.png') no-repeat center;
  padding:1vh;
}
</style>
