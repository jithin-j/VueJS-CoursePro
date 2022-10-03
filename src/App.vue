<template>
  <Header/>
  <Landing />
  <Stat />
  <Courses />
  <TopEarners/>
  <HowItWorks/>
  <Testimonials/>
  <Contact />
  <Footer/>
</template>

<script>
import Landing from "./components/Landing.vue"
import Stat from "./components/Stat.vue";
import Courses from "./components/Courses.vue";
import TopEarners from "./components/TopEarners.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";


export default {
  name: 'App',
  components: {
    Landing,
    Stat,
    Courses,
    TopEarners,
    HowItWorks,
    Testimonials,
    Contact,
    Footer,
    Header
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import "./styles/main.css";
</style>
