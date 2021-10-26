<template>
  <div>
  <vue-particles 
    color="#dedede"
    :particleOpacity="1"
    :particlesNumber="100"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="1"
    :linesDistance="150"
    :moveSpeed="2"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    style="background:#282846"
  ></vue-particles>
  </div>
</template>

<style scoped>
  #particles-js { 
  position: absolute;
  background-size: cover;
  top: 0; 
  bottom: 0; 
  left: 0;
  right: 0; 
  overflow-y: hidden; 
  z-index: 0;
}
</style>
