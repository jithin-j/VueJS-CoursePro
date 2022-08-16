<template>
    <div class="main">
        <a href="#"><img src="../assets/Logo.svg" alt="Logo"></a>
        <div class="sub">
            <a href="#">Login</a>
            <button
                style="height: 2rem; width: 6rem; background: #01CB63; box-shadow: 0px 5px 15px #01CB6359; border-radius: 10px;">Register</button>
        </div>
    </div>
</template>

<script>


export default {
    name:"Header"
}
</script>

<style scoped>
.main{
    position: -webkit-sticky;
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    top:0;
    background: white;
}
.sub{
    display: flex;
    flex-direction: row;
    gap:1rem;
    justify-content: center;
    align-content: center;
    margin-top: 0.7rem;
}
</style>