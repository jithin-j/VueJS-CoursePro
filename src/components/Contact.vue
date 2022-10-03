<template>
  <section class="mt-48 container">
    <div class="p-8 flex flex-wrap justify-between gap-12 bg-[#F8F9FB]">
      <div class="contact">
        <h2>Contact Information</h2>
        <div class="flex flex-col gap-2">
          <div class="inline-flex items-center">
            <img src="../assets/mail.png" alt="mail-icon" class="w-16 aspect-square">
            <p>contact@coursepro.com</p>
          </div>
          <div class="inline-flex items-center">
            <img src="../assets/phone.png" alt="mail-icon" class="w-16 aspect-square">
            <p>1800-562-895, 1800-869-877</p>
          </div>
          <div class="inline-flex items-center">
            <img src="../assets/gps.png" alt="mail-icon" class="w-16 aspect-square">
            <p>102 Street, India</p>
          </div>
        </div>
        <h2>Social Media Channel</h2>
        <div class="flex gap-4 mt-4">
          <a href="#"><img src="../assets/fb.png" alt="Facebook Icon" class="w-8 aspect-square"/></a>
          <a href="#"><img src="../assets/Twitter.png" alt="Twitter Icon" class="w-8 aspect-square"></a>
          <a href="#"><img src="../assets/Github.png" alt="Github Icon" class="w-8 aspect-square"></a>
          <a href="#"><img src="../assets/Linkedin.png" alt="LinkedIn Icon" class="w-8 aspect-square"></a>
        </div>
      </div>
      <div class="form">
        <h3>Fill up the form and our team will get back to you within 24 hours</h3>
        <form>
          <ul class="space-y-2">
            <li class="flex flex-col md:flex-row gap-4">
              <input class="p-2 bg-gray-50 border-gray border" type="text" id="name" placeholder="Name"/>
              <input class="p-2 bg-gray-50 border-gray border" type="text" id="email" placeholder="Email">
            </li>
            <li class="flex flex-col md:flex-row gap-4">
              <input class="p-2 bg-gray-50 border-gray border" type="text" id="phone" placeholder="Phone"/>
              <input class="p-2 bg-gray-50 border-gray border" type="text" id="email" placeholder="Subject"/>
            </li>
            <li class="flex flex-col md:flex-row gap-4">
              <input class="p-2 bg-gray-50 border-gray border" type="text" id="email" placeholder="Message"/>
            </li>
            <li class="mt-4">
              <input type="button" value="Submit" class="btn bg-black text-white w-full">
            </li>
          </ul>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Contact'
}
</script>
