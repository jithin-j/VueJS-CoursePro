<template>
  <section class="stat-section">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 py-14 items-center text-center justify-between">
      <div>
        <h3 class="text-gray-600 mb-2">Total students</h3>
        <p class="border-b-green border-b-2 inline">5140</p>
      </div>
      <div>
        <h3 class="text-gray-600 mb-2">Partners</h3>
        <p class="border-b-green border-b-2 inline">4123</p>
      </div>
      <div>
        <h3 class="text-gray-600 mb-2">Affiliate Distributions</h3>
        <p class="border-b-green border-b-2 inline">4.18 Lac</p>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  name: 'Stat'
}
</script>

<style scoped>
.stat-section {
  background: url("../assets/bkg.svg");
}
</style>
