<template>
  <div class="user">
    <img
      src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
      width="150"
      height="150"
    />
    <h3>{{ name }}</h3>
    <p>{{ designation }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    designation: String
  }
}
</script>

<style scoped>
h3 {
  color: #426696;
  font-weight: 600;
  opacity: 0.8;
}
p {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
}

</style>