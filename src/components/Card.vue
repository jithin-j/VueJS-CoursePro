<template>
  <div class="bg-gray-300 rounded-b-lg">
    <img :src="require(`@/assets/${img}`)" alt="test" class="w-full object-cover">
    <div class="p-4 space-y-2 flex flex-col justify-between">
      <h3 class="text-left">{{ title }}</h3>
      <p>{{ enrollno }} Students</p>
      <div class="flex items-center gap-4">
        <img src="../assets/clock.svg">
        <p>{{ time }}</p>
        <img src="../assets/calendar.svg">
        <p>{{ lecno }} Lectures</p>
      </div>
      <div class="inline-flex gap-2 items-center mt-auto">
        <img :src="require(`@/assets/${proimg}`)" alt="profile picture" class="w-8 aspect-square rounded-full">
        <p>{{ instructor }}</p>
        <p>{{ price }}</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Card',
  props: {
    title: String,
    img: String,
    enrollno: String,
    price: String,
    time: String,
    lecno: String,
    proimg: String,
    instructor: String
  }
}

</script>
