<template>
  <div class="home mx-2 position-absolute top-50 start-50 translate-middle text-center">
    <div class="d-flex justify-content-center main">
      <div class="col-lg-6 col-12 flex-container my-auto me-md-5">
        <h1 class="mx-auto title mb-0">Kevin Corigliano</h1>
        <h1 class="mx-auto sub-title mb-5">Jr. Full Stack Web Developer</h1>
        <p v-if="languages=='it' || languages == undefined" class="mx-auto description">Benvenuti nel mio Portfolio! Sono un ragazzo di 24 anni con una smisurata passione per la programmazione e da diverso tempo a questa parte ho iniziato a studiarla seriamente, potendo imparare durante il mio percorso fin'ora Javascript, PHP e Python.</p>
        <p v-if="languages=='en'" class="mx-auto description">Welcome to my Portfolio! I am a 24-year-old boy with an immense passion for programming and for some time now I have begun to study it seriously, being able to learn Javascript, PHP and Python during my path so far.</p>
        <p v-if="languages=='de'" class="mx-auto description">Willkommen in meinem Portfolio! Ich bin ein 24-jähriger Junge mit einer immensen Leidenschaft für das Programmieren und habe seit einiger Zeit begonnen, es ernsthaft zu studieren, wobei ich auf meinem bisherigen Weg Javascript, PHP und Python lernen konnte.</p>
      </div>
      <div class="col-lg-2 col-0"></div>
      <div class="d-none d-lg-block">
        <img class="foto" src="../../public/images/foto-2.png" alt="">
      </div>
      <div class="d-block d-lg-none img-thumb position-absolute top-45 start-60 translate-middle text-center">
        <img class="foto" src="../../public/images/foto-2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props:{
    lang: String
  },
  data() {
    return {
      languages: this.$route.query.lang,
      selLink: this.$route.name,
    }
  },
  methods: {
    changeLang() {
      if(this.languages == undefined || this.languages == null){
        this.languages == 'it'
      }
      this.languages == this.$route.query.lang
      console.log(this.$route.query.lang)
    },
    selLinkChange(){
      if(this.selLink == undefined || this.selLink == null){
        this.selLink == 'Home'
      }
    }
  },
  mounted() {
    this.changeLang();
    this.selLinkChange();
  },
  beforeMount(){
    this.changeLang();
    this.selLinkChange();
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/main.scss'; 
</style>