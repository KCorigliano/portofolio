<template>
  <div class="home position-absolute top-50 start-50 translate-middle text-center col-lg-11">
    <div class="d-flex flex-column justify-content-center align-items-center main col-lg-12">
      <div class="d-flex justify-content-center col-12">  
        <p class="col-lg-3 me-5"><a href="https://linkedin.com/in/kevin-corigliano-8a8730226" target="_blank"><font-awesome-icon class="aw-icon" icon="fa-brands fa-linkedin" /></a></p>
        <p class="col-lg-3"><a href="https://github.com/KCorigliano" target="_blank"><font-awesome-icon class="aw-icon" icon="fa-brands fa-github" /></a></p>
      </div>
      <p class="description d-flex mt-3 justify-content-start align-items-center">
        <font-awesome-icon class="aw-icon me-3" icon="fa-solid fa-home" />
        <span>
          58093 Hagen, Germany
        </span>
      </p>
      <p class="description d-flex mt-3 justify-content-start align-items-center">
        <font-awesome-icon class="aw-icon me-3" icon="fa-solid fa-phone" />
        <span>
          +49 1743951323
        </span>
      </p>
      <p class="description d-flex mt-3 justify-content-start align-items-center">
        <font-awesome-icon class="aw-icon me-3" icon="fa-solid fa-at" />
        <span>
          corigliano98@hotmail.com
        </span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      selLink: this.$route.name,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/style/main.scss'; 
</style>
