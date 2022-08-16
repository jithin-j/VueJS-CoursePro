<template>
    <header>
        <div class="landing">
            <div class="Left-Text">
                <p>AnyTime, anywhere Learn on your schedule from any device</p>
            </div>
            <div class="sub-text">
                <p style="font-style: italic">We Believe everyone has the capcity to be creative</p>
                <p style="color:white; font-size: 1.7rem;"> Course Pro </p>
                <p style="font-style: italic">is a place where people develop their own
                    potential</p>
            </div>
            <button>Let's Get Started</button>
        </div>
    </header>
</template>

export default {
    name: 'Landing',
}

<style scoped>
header{
    height:120%;
    background: url(" ../assets/Landing.png") no-repeat center center fixed; -webkit-background-size: cover;
                    -moz-background-size: cover; -o-background-size: cover; background-size: cover; } button{ width:10%;
                    height: 2.5rem; background: black; color: white; border-radius: 0.3rem; margin-bottom: 5%; } .landing{
                    display: flex; flex-direction: column; gap: 10px; margin-left: 5%; } .Left-Text{ top: 10%; left:
                    20%; width: 35%; height: 50%; margin-top: 5%; text-align: left; font: normal normal bold 3rem/3.6rem
                    Noto Sans; letter-spacing: 0px; color: #FFFFFF; text-transform: capitalize; opacity: 1; } .sub-text{
                    width: 35%; height: 30%; text-align: left; font: normal normal normal 1.5rem/2rem Noto Sans;
                    letter-spacing: 0px; color: #1F2532; } </style>
