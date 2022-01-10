<template>
  <div>
    <main>
      <!-- <section class="glass"> -->
        <div class="dashboard">
          <CandidateName name="Hannah Cruz" designation="Pro Member" />
          <div class="links">
            <div class="link">
              <img
                src="https://img.icons8.com/color/50/000000/project.png"
                alt=""
              />
              <h2>Projects</h2>
            </div>
            <div class="link">
              <img
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/4a90e2/external-badge-startup-flatart-icons-solid-flatarticons.png"
                alt=""
              />
              <h2>Badges</h2>
            </div>
            <div class="link">
              <img src="./images/upcoming.png" alt="" />
              <h2>Skills</h2>
            </div>
          </div>
        </div>
        <div class="games">
          <div class="status">
            <h1>Projects</h1>
            <!-- <input type="text" /> -->
          </div>
          <div class="cards">
            <ProjectList
              imageName="assassins.png"
              projectName="Project 1"
              skillSet="Skill Set1"
              percentage=60
            />
            <ProjectList
              imageName="sackboy.png"
              projectName="Project 2"
              skillSet="Skill Set2"
              percentage=60
            />
            <ProjectList
              imageName="spiderman.png"
              projectName="Project 3"
              skillSet="Skill Set3"
              percentage=20
            />
          </div>
        </div>
      <!-- </section> -->
    </main>
    <!-- <div class="circle1"></div>
    <div class="circle2"></div> -->
  </div>
</template>

<script>
import CandidateName from "./CandidateName.vue";
import ProjectList from "./ProjectList.vue";
export default {
  components: {
    CandidateName,
    ProjectList,
  },
};
</script>

<style scoped>
h1 {
  color: #426696;
  font-weight: 600;
  font-size: 3rem;
  opacity: 0.8;
  margin-top: 0px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 0px;
}
h2 {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
}
main {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .glass {
  background: white;
  min-height: 50vh;
  width: 60%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
}
.circle1,
.circle2 {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
} */

/* .circle1 {
  top: 5%;
  right: 15%;
}
.circle2 {
  bottom: 5%;
  left: 10%;
} */
.dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  height: 100vh;
  /* border-radius: 2rem; */
}
.link {
  display: flex;
  margin: 0rem 0rem;
  padding: 1rem 5rem;
  align-items: center;
}
.link h2 {
  padding: 0rem 2rem;
}

.status input {
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border: none;
  width: 50%;
  padding: 0.5rem;
  border-radius: 2rem;
}

.games {
  margin: 5rem;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 0px;
  margin-left: 40px;
  margin-bottom: 0px;
  margin-right: 40px;
}
.card {
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  /* margin: 2rem 0rem;
  padding: 2rem; */
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: space-between;
}
</style>
