<template>
  <div class="sub-title">
    {{title}}
     
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      now: "",
      second: "",
    };
  },
  
  methods: {
    
  },
};
</script>


<style lang="scss" scoped>
.sub-title {
  height:4vh;
  line-height: 4vh;
  background: url('~@/assets/img/sub_title.png') no-repeat left;
  background-size: auto 100%;
  text-align: left;
  text-shadow: 2px 1px 5px #fff;
}
</style>
