<template>
  <div class="card">
    <img src="require(`../assets/${imageName}`)" alt="image" />
    <div class="card-info">
      <h2>{{ projectName }}</h2>
      <p>{{ skillSet }}</p>
      <div class="progress"></div>
    </div>
    <h2 class="percentage">{{ percentage }}%</h2>
  </div>
</template>

<script>
export default {
  props: {
    imageName: String,
    projectName: String,
    skillSet: String,
    percentage: Number,
  },
};
</script>

<style scoped>
h2,
p {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
}
.card {
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 2rem 0rem;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: space-between;
}

.progress {
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  width: 100%;
  height: 25%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.progress::after {
  content: "";
  width: 100%;
  height: 100%;
  background: rgb(236, 236, 236);
  position: absolute;
  left: 60%;
}
.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.percentage {
  font-weight: bold;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
