<template>
    <div class="main">
        <a href="#">
            <h3>2021-2022 © Course Pro Private Limited</h3>
        </a>
        <div class="subpt">
            <a href="">
                <h3>Terms & Conditions</h3>
            </a>
            <a href="">
                <h3>Privacy Policy</h3>
            </a>
        </div>
    </div>

</template>

<script>
 export default{
    name:'Footer'
 }
</script>
<style scoped>
    .main{
        display: flex;
        flex-direction: row;
        gap: 10rem;
        justify-content: space-between;
        margin: 1rem;
    }
    .subpt{
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
    a:visited{
        text-decoration: none;
        color: black;
    }
</style>