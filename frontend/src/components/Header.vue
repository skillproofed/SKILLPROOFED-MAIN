<template>
      <nav>
      <div class="logo">
        <h4>SkillProofed</h4>
      </div>
      <ul class="nav-links">
        <li>Roles</li>
        <li>Profile</li>
        <li>Submit</li>
        <li>Projects</li>
        <li>Sign In</li>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
</template>

<script>
export default {
  mounted() {
    const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {

    // toggle nav
    nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // toggle burger navigation
  burger.classList.toggle('toggle');
  });
}

navSlide();
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: rgba(226, 226, 226, 0.2);
}

.logo {
  color: rgb(256, 256, 256);
  /* text-transform: uppercase; */
  letter-spacing: 5px;
  font-size: 20px;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  width: 25%;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  color: rgb(226, 226, 226);
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 14px;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div{
  width: 25px;
  height: 3px;
  background-color:rgb(226, 226, 226);
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 1024px) {
  .nav-links {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    position: absolute;
    right: 0px;
    height:92vh;
    top: 8vh;
    background-color: #282846;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    border-left: 1px solid #ffff;
    border-bottom: 1px solid #ffff;
  }
  .nav-links li {
    opacity: 1;
  }
  .burger {
    display: block;
  }
}

.nav-active {
  transform: translateX(0%);
  height: 10%;
  padding: 10px;
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
<!--
<template>
  <div class="container">
    <div class="menu1 navbar2">
      <div class="menu-item1 header2">
        <ul style="padding-left:13%;">
          <li class="menu1 brand1 menu-item1">SkillProofed</li>
        </ul>
        <ul class="menu2">
          <li>Roles</li>
          <li>Projects</li>
          <li>Submit</li>
          <li>Profile</li>
          <li>Sign Out</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
.container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.brand1{
  font-family: 'Sigmar One', cursive;
  margin-top: 5px;
  margin-right: 75%;
  height: 0px;
  font-size: 1.5em;
  color: white;
  text-align: left;
}
.menu1 {
  display: flex;
  /* align-items: left; */
  /* justify-content: space-around ; */
  margin-top: 0px;
  height: 0px;
}
.menu-item1 {
  padding-top: 0.1%;
  flex: 1;
  /* text-align: left; */
  display: flex;
  justify-content: right;
  
  /* align-items: left; */
}
.navbar2{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
} 
 .header2 {
  width: 100%;
  height: 60px;
} 
.menu2 {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 25%;
}
.menu2 li {
  display: block;
  height: 100%;
  font-size: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  text-align: center;
  padding: 0 10px;
  margin-right: 30px;
} 
.menu2 li:after,
.menu2 li:before {
  content: "";
  position: absolute;
  display: block;
  border: 0px solid transparent;
  border-bottom: 0px solid transparent;
  width: 0%;
  height: 0%;
  transition: all 0.5s ease;
}
.menu2 li:after {
  width: 0%;
  height: 0%;
  top: 0;
  left: 0;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
}
.menu2 li:before {
  width: 0%;
  height: 0%;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid transparent;
  border-right: 2px solid transparent;
}
.menu2 li:hover::before,
.menu2 li:hover::after {
  width: 100%;
  height: 100%;
  border-color: #fff;
} 
</style>
-->