<template>
    <body>
        <div class="stat">
            <div class="heading">
                <h3>Total students</h3>
                <h3>Partners</h3>
                <h3>Affiliate Distribution</h3>
            </div>
            <div class="values">
                <h1>5140</h1>
                <h1>4123</h1>
                <h1>4.18 Lac</h1>
            </div>
        </div>
    </body>
</template>

export default{
    name: 'Stat'
}
<style scoped>
    body{
        background: url("../assets/bkg.svg");
    }
    .stat{
        height: 10rem;
    }
    .heading{
        margin-left: 1%;
        padding-top: 2.6rem;
        color: #86919D;
        display: flex;
        flex-direction: row;
        gap: 30%;
        align-items: center;
        justify-content: center;
    }
    .values{
        margin-top: 0rem;
        display: flex;
        flex-direction: row;
        gap: 33%;
        align-content: center;
        justify-content: center;
        text-decoration: underline;
        text-decoration-color: #01CB63;
    }
</style>