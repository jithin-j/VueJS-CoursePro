<template>
    <div class="maindiv">
        <img :src="require(`@/assets/${img}`)" alt="test">
        <h3 style="margin-left:1rem">{{ title }}</h3>
        <p style="font-style:italic; margin-left: 1rem;">{{enrollno}} Students</p>
        <div class="row1">
            <img src="../assets/clock.svg">
            <p>{{time}}</p>
            <img src="../assets/calendar.svg">
            <p>{{lecno}} Lectures</p>
        </div>
        <div class="row2">
            <img :src="require(`@/assets/${proimg}`)" alt="profile picture" class="profile">
            <p>{{instructor}}</p>
            <p>{{price}}</p>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Card',
    props:{
        title:String,
        img: String,
        enrollno:String,
        price: String,
        time: String,
        lecno:String,
        proimg: String, 
        instructor: String
    }
}

</script>


<style>
    .maindiv{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width:35%;
        background: #E6E6E6;
        border-radius: 0.5rem;
    }
    .row1{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-left:1rem;
        margin-right: 1rem;
    }
    .row2{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-left: 1rem;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }
    .profile{
        height: 2rem;
        width: 2rem;
        border-radius: 2rem;
    }
</style>