<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "欢迎来到",
    },
  },
};
</script>


<style lang="scss" scoped>
.hello{
  // color: $color;
}
</style>
