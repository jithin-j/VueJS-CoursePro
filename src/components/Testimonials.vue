<template>
    <section class="mt-48 container">
        <h3 class="italic text-green">Testimonials</h3>
        <h2>Check out What Our Students Think About Us</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div class="flex flex-col rounded-lg card">
                <p style="font-style:italic; margin:1rem;">It's a comprehensive online learning platform for everyone
                    looking to learn
                    and course pro. provinding this platform which is very beneficial for practicals. Students can
                    revise everything at home like dissection and slides</p>
                <div class="card-footer">
                    <img style="width:3.5rem; height: 3.5rem; border-radius: 3.5rem;" src="../assets/p1.png"
                        alt="profile">
                    <p>Anshul Jain</p>
                    <img style="width:2rem; height: 2rem;" src="../assets/quote.png" alt="quote">
                </div>
            </div>
            <div class="flex flex-col rounded-lg card">
                <p style="font-style:italic; margin:1rem;">It's A Comprehensive Online Learning Platform For Everyone
                    Looking To Learn And Course Pro. Provinding This Platform Which Is Very Beneficial For Practicals.
                    Students Can Revise Everything At Home Like Dissection And Slides.</p>
                <div class="card-footer">
                    <img style="width:3.5rem; height: 3.5rem; border-radius: 3.5rem;" src="../assets/p2.png"
                        alt="profile">
                    <p>Ankita Jain</p>
                    <img style="width:2rem; height: 2rem;" src="../assets/quote.png" alt="quote">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name:'Testimonials'
}
</script>

<style scoped>
.card{
  box-shadow: 0px 20px 30px #1F25321A;
}
.card-footer{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top:1rem;
    margin: 1rem;
}
</style>
