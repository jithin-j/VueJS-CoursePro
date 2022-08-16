<template>
    <div class="main">
        <h3 style="font-style: italic; color: #01CB63;">Top Earners</h3>
        <h2>Transforming your ideas into reality</h2>
        <div class="photos">
            <div class="element">
                <img class="photos" src="../assets/te1.png" alt="">
                <div class="earnings">
                    <img style="margin-top: 0.5rem;" src="../assets/rect.png" alt="">
                    <p style="margin-top: 1rem;">₹8,00,000</p>
                </div>
            </div>
            <div class="element">
                <img class="photos" src="../assets/te2.png" alt="">
                <div class="earnings">
                    <img style="margin-top: 0.5rem;" src="../assets/rect.png" alt="">
                    <p style="margin-top: 1rem;">₹6,00,000</p>
                </div>
            </div>
            <div class="element">
                <img class="photos" src="../assets/te3.png" alt="">
                <div class="earnings">
                    <img style="margin-top: 0.5rem;" src="../assets/rect.png" alt="">
                    <p style="margin-top: 1rem;">₹5,00,000</p>
                </div>
            </div>
            <div class="element">
                <img class="photos" src="../assets/te4.png" alt="">
                <div class="earnings">
                    <img style="margin-top: 0.5rem;" src="../assets/rect.png" alt="">
                    <p style="margin-top: 1rem;">₹4,50,000</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>


export default {
    name:'TopEarners'
}

</script>
<style scoped>
.main{
    margin:3%;
    margin-top:6rem;
}
.photos{
    display: flex;
    flex-direction: row;
    gap:2rem;
    height: 15rem;
    width: 100%;
    justify-content: space-around;
}
.earnings{
    display: flex;
    flex-direction: row;
    gap:1rem;
    font-size: 1.6rem;;
}
</style>