<template>
    <div class="main">
        <div class="content">
            <div class="contact">
                <h2>Contact Information</h2>
                <div class="details">
                    <img src="../assets/mail.png" alt="mail-icon">
                    <p>contact@coursepro.com</p>
                </div>
                <div class="details">
                    <img src="../assets/phone.png" alt="mail-icon">
                    <p>1800-562-895, 1800-869-877</p>
                </div>
                <div class="details">
                    <img src="../assets/gps.png" alt="mail-icon">
                    <p>102 Street, India</p>
                </div>
                <h2>Social Media Channel</h2>
                <div class="icons">
                    <a href="#"><img src="../assets/fb.png" alt="Facebook Icon"></a>
                    <a href="#"><img src="../assets/Twitter.png" alt="Twitter Icon"></a>
                    <a href="#"><img src="../assets/Github.png" alt="Github Icon"></a>
                    <a href="#"><img src="../assets/Linkedin.png" alt="LinkedIn Icon"></a>
                </div>
            </div>
            <div class="form">
                <h3>Fill up the form and our team will get back to you within 24 hours</h3>
                <form>
                    <ul style="list-style: none;">
                        <li>
                            <input size="30" type="text" id="name" placeholder="Name"
                                style="border-color: #01CB63; height: 2.5rem">
                            <input size="30" type="text" id="email" placeholder="Email"
                                style="margin-left: 3rem; border-color: #01CB63; height: 2.5rem">
                        </li>
                        <li>
                            <input size="30" type=" text" id="phone" placeholder="Phone"
                                style="margin-top: 3rem; border-color: #01CB63; height: 2.5rem">
                            <input size="30" type="text" id="email" placeholder="Subject"
                                style="margin-left: 3rem; border-color: #01CB63; height: 2.5rem">
                        </li>
                        <li>
                            <input type="text" id="email" placeholder="Message" size="68"
                                style="margin-top: 3rem; height:5rem; border-color: #01CB63">
                        </li>
                        <li>
                            <input type="button" value="Submit" style="width:10rem; height:2rem; margin-top:2rem; margin-left:13rem; background:black; color:white;">
                        </li>
                    </ul>


                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Contact'
}
</script>

<style scoped>
.main{
    margin: 3%;
    margin-top: 6rem;
}
.content{
    background: #F8F9FB;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    gap: 20rem;
}
.contact{
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.details{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.details img{
    width: 4rem; 
    height: 4rem;
}
.icons{
    display: flex;
    flex-direction: row;
    gap: 3rem;
}
.icons img{
    width: 3rem;
    height: 3rem;
}
.form{
    margin-top:7%;
}
.form form{
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    gap: 10rem;
}

</style>