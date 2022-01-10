<template>
  <div>
    <IntroText />
    <router-link to="/login_signup">
      <BaseButton
        class="button button--pallene"
        text="Explore more"
      />
    </router-link>
    <div class="container">
      <div class="card card-1">
        <div class="box">
          <div class="content">
            <!-- <h2>01</h2> -->
            <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-hacker-information-security-inipagistudio-mixed-inipagistudio.png"/>
            <h3>Standard Definitions of Roles</h3>
            <p>
              We set clear expectations for each role, no long lists of skills /
              nice to haves more suited for an IT department and no more job
              requisitions.
            </p>
          </div>
        </div>
      </div>
      <div class="card card-1">
        <div class="box">
          <div class="content">
            <!-- <h2>02</h2> -->
            <img src="https://img.icons8.com/bubbles/80/000000/connected-people.png"/>
            <h3>Simple Connections</h3>
            <p>
              We connect both sides of the hiring equation, with clear insights
              to what skills are required and offered.
            </p>
          </div>
        </div>
      </div>
      <div class="card card-1">
        <div class="box">
          <div class="content">
            <!-- <h2>03</h2> -->
            <img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-community-world-humanitarian-day-wanicon-flat-wanicon.png"/>
            <h3>Access to a Skilled Community</h3>
            <p>
              Our candidates are engaged, learning, growing and upskilling to
              ensure that their knowledge are up to date and relevant
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IntroText from "./IntroText.vue";
import BaseButton from "./BaseButton.vue";
export default {
  components: {
    IntroText,
    BaseButton,
  },
};
</script>

<style scoped>
.button {
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
  background: #D8EBE4;
  border: none;
  padding: 1rem 1rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}
.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--pallene {
  font-family: aktiv-grotesk-extended, sans-serif;
  font-weight: 700;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0 0px #78DEC7;
  transition: border-radius 0.3s, box-shadow 0.3s, color 0.3s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
}
.button--pallene:hover {
  color: #000000;
  border-radius: 50%;
  box-shadow: inset 0 0 0 40px #FED049;
  transition-delay: 0s, 0s, 0.2s;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");
.card {
  background: #ffff;
  border-radius: 15px;
  display: inline-block;
  height: 500px;
  margin: 1rem;
  position: relative;
  width: 350px;
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2%;
  background-color: #D8EBE4;
}
.container .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #ffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}
.container .box .content {
  padding: 20px;
  text-align: center;
}
.container .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
}
@import url("https://fonts.googleapis.com/css2?family=Limelight&display=swap");
.container .box .content h3 {
  font-size: 2.1rem;
  color: rgb(0, 0, 0);
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
  font-family: "Limelight", cursive;
}
.container .box .content p {
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.9);
  z-index: 1;
}
@media only screen and (min-height: 100px) {
  .footer {
    margin-top: 100%;
  }
}
</style>
