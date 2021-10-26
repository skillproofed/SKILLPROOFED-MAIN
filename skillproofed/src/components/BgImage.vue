<template>
  <!-- <div class="image">
    <BgParticles />
    <Header />
    <Card />
    <Footer />
  </div> -->
  <div>
    <vue-particles color="#dedede" style="background: #282846"></vue-particles>
    <div class="centered-text">
      <!-- <Navbar
        name="SkillProofed"
        :navLinks="[
          {
            name: 'Roles',
          },
          { name: 'Projects' },
          {
            name: 'Submit',
          },
          {
            name: 'Profile',
          },
          {
            name: 'Sign Out'
          }
        ]"
      /> -->
      <Header />
      <Card style="margin-left: 0" />
      <Footer />
    </div>
  </div>
</template>

<script>
// import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import Card from "./Card.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    // Navbar,
    Header,
    Card,
    Footer,
  },
};
</script>

<style scoped>
#particles-js {
  height: 55vh;
}
.centered-text {
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 0%;
  width: 100vw;
  left: 0%;
}
</style>
