<template>
  <section class="mt-48 container">
    <h3 class="text-center text-green italic">Courses</h3>
    <h2 class="text-center" style="text-align:center">Our most popular courses</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      <Card title="Ultimate Business Intelligence Analyst A to Z Course 2021" img="c1.png" enrollno="46,995"
            price="$200" time="11 hr 20 mins" lecno="44" instructor="Albert Hitler" proimg="p1.png" />
      <Card title="Adobe Photoshop Training: From Beginner to Pro" img="c2.png" enrollno="6,995" price="$300"
            time="6 hr 20 mins" lecno="24" instructor="Wanda Willson" proimg="p2.png" />
      <Card title="Social Media Marketing - A to Z Content Marketing class 2021" img="c3.png" enrollno="46,995"
            price="$200" time="11 hr 20 mins" lecno="44" instructor="Net ninja" proimg="p1.png" />
    </div>
  </section>
</template>

<script>
import  Card  from '../components/Card.vue'

export default {
    name: 'Courses',
    components: {Card}
}

</script>
