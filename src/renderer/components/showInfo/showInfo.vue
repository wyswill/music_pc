<template>
  <div class="showinfo">this is show info</div>
</template>

<script>
export default {
  props: ["from"],
  mounted() {
    let { params } = this.$route;
    console.log(params);
  }
};
</script>

<style>
</style>
