<template>
  <div id="app position-absolute top-50 start-50 translate-middle">
    <div id="nav">
      <div class="d-flex justify-content-center my-2">
        <router-link @click="changeLang('Home'), section=='Home'" class="link" :class=" selLink=='home' ? 'active' : ''" 
        :to="{
          path: '/home',
          params: lang,
          query: { lang: lang },
        }"
        >
        <span class="d-none d-md-block">
          Home
        </span>
        </router-link>
        <router-link @click="changeLang('About me'), section=='About me'" class="link" :class=" selLink=='about' ? 'active' : ''" 
        :to="{
          path: '/projects',
          params: lang,
          query: { lang: lang },
        }"
        >
        <span v-if="lang=='it' || lang == undefined" class="d-none d-md-block">
          Progetti
        </span>
        <span v-if="lang=='en'" class="d-none d-md-block">
          Projects
        </span>
        <span v-if="lang=='de'" class="d-none d-md-block">
          Projekte
        </span>
        </router-link>
        <router-link @click="changeLang('contacts'), section=='Contacts'"  class="link" :class=" selLink=='cont' ? 'active' : ''" 
        :to="{
          path: '/contacts',
          params: lang,
          query: { lang: lang },
        }"
        >
        <span v-if="lang=='it' || lang == undefined" class="d-none d-md-block">
          Contatti
        </span>
        <span v-if="lang=='en'" class="d-none d-md-block">
          Contacts
        </span>
        <span v-if="lang=='de'" class="d-none d-md-block">
          Kontakte
        </span>
        </router-link>
        <div class="ms-auto me-3 d-flex">
          <!-- <select v-model="lang" @change="refreshPage()" id="lang">
            <option value="it" selected><country-flag country='it' size='small'/></option>
            <option value="en"><country-flag country='en' size='small'/></option>
            <option value="de"><country-flag country='de' size='small'/></option>
          </select> -->
          <div @click="refreshPage('it')"><country-flag class="mx-2 flag" :class=" lang == 'it' ? 'selected' : '' " country='it' :size=" lang == 'it' || lang == undefined ? 'big' : 'normal'"/></div>
          <div @click="refreshPage('en')"><country-flag class="mx-2 flag" :class=" lang == 'en' ? 'selected' : '' " country='gb' :size=" lang == 'en' ? 'big' : 'normal'"/></div>
          <div @click="refreshPage('de')"><country-flag class="mx-2 flag" :class=" lang == 'de' ? 'selected' : '' " country='de' :size=" lang == 'de' ? 'big' : 'normal'"/></div>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="d-flex justify-content-center fixed-bottom mx-auto px-auto mb-2">
      <router-link @click="changeLang('Home'), section=='Home'" class="link-xs d-block d-md-none" 
          :to="{
            path: '/home',
            params: lang,
            query: { lang: lang },
          }"
          >
          <p class="nav-icon"><font-awesome-icon class="aw-icon me-2" icon="fa-solid fa-home" /></p>
      </router-link>
      <router-link @click="changeLang('Home'), section=='About me'" class="link-xs d-block d-md-none" 
          :to="{
            path: '/projects',
            params: lang,
            query: { lang: lang },
          }"
          >
          <p class="nav-icon"><font-awesome-icon class="aw-icon me-2" icon="fa-solid fa-briefcase" /></p>
      </router-link>
      <router-link @click="changeLang('Home'), section=='Contacts'" class="link-xs d-block d-md-none" 
          :to="{
            path: '/contacts',
            params: lang,
            query: { lang: lang },
          }"
          >
          <p class="nav-icon"><font-awesome-icon class="aw-icon me-2" icon="fa-solid fa-address-card" /></p>
        </router-link>
    </div>
  </div>
</template>


<script>
import CountryFlag from 'vue-country-flag'
export default {
  components:{
    CountryFlag
  },
  data() {
    return {
      lang:'it',
      selLink: this.$route.name,
    }
  },
  methods: {
    refreshPage(value){
      this.lang = value
      location.assign(`/home?lang=${this.lang}`)
    },
    changeLang(){
      if(this.languages == undefined || this.languages == null){
        this.languages == 'it'
      }
      this.lang = this.$route.query.lang
      this.selLink = this.$route.name
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

<style lang="scss">
@import '@/style/main.scss'; 
</style>
