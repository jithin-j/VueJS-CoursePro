<template>
  <header>
    <div class="max-w-screen-md p-14">
      <h1 class="text-5xl text-white">AnyTime, anywhere Learn on your schedule from any device</h1>
      <div class="space-y-2 my-4">
        <p class="text-lg italic">We Believe everyone has the capcity to be creative</p>
        <p class="text-white text-3xl"> Course Pro </p>
        <p class="text-lg italic">is a place where people develop their own potential</p>
      </div>
      <button class="btn bg-black text-white">Let's Get Started</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Landing',
}
</script>

<style scoped>
header {
  background: url(" ../assets/Landing.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
