<template>
  <div class="about mx-2 container mx-auto container mt-2">
    <h1 v-if="languages=='it' || languages == undefined" class="title d-none d-md-block fs-md-3">Questi sono un pò di progetti che ho sviluppato utilizzando le tecnologie che ho imparato.</h1>
    <h1 v-if="languages=='en'" class="title d-none d-md-block fs-md-3">These are some of the projects that I have developed using the technologies I have learned.</h1>
    <h1 v-if="languages=='de'" class="title d-none d-md-block fs-md-3">Dies sind einige der Projekte, die ich mit den von mir erlernten Technologien entwickelt habe.</h1>
    <h1 v-if="languages=='it' || languages == undefined" class="title-2 d-block d-md-none fs-md-3">Questi sono un pò di progetti che ho sviluppato utilizzando le tecnologie che ho imparato.</h1>
    <h1 v-if="languages=='en'" class="title-2 d-block d-md-none fs-md-3">These are some of the projects that I have developed using the technologies I have learned.</h1>
    <h1 v-if="languages=='de'" class="title-2 d-block d-md-none fs-md-3">Dies sind einige der Projekte, die ich mit den von mir erlernten Technologien entwickelt habe.</h1>
    <h1 v-if="languages=='it' || languages == undefined" class="sub-title">Tecnologie utilizzate: Vue.js - Laravel</h1>
    <h1 v-if="languages=='en'" class="sub-title">Technologies used: Vue.js - Laravel</h1>
    <h1 v-if="languages=='de'" class="sub-title">Verwendete Technologien: Vue.js - Laravel</h1>
    <div class="projects">
      <div class="d-flex col-lg-12 justify-content-center flex-wrap p-3" dir="ltr">
        <div class="d-md-flex text-sm-center justify-content-center align-items-center mb-5" >
          <div class="col-12 col-lg-6 me-2-md">
            <img class="mx-auto img-fluid" src="../../public/images/boolflix.jpg" alt="">
          </div>
          <p v-if="languages=='it' || languages == undefined" class="col ms-2 description">Boolflix è un progetto che replica tramite chiamate API e con l'utilizzo di Vue.js che replica la famosa web app Netflix. Come nell'originale avrai la possibilità di cercare film e serie tv che saranno filtrati per genere.</p>
          <p v-if="languages=='en'" class="col ms-2 description">Boolflix is a project that replicates through API calls and with the use of Vue.js that replicates the famous Netflix web app. As in the original you will have the possibility to search for movies and TV series that will be filtered by genre.</p>
          <p v-if="languages=='de'" class="col ms-2 description">Boolflix ist ein Projekt, das durch API-Aufrufe repliziert und mit der Verwendung von Vue.js die berühmte Netflix-Web-App repliziert. Wie im Original haben Sie die Möglichkeit, nach Filmen und TV-Serien zu suchen, die nach Genre gefiltert werden.</p>
        </div>
        <div class="d-md-flex text-sm-center justify-content-center align-items-center mb-5" >
          <div class="col-12 col-lg-6 me-2-md">
            <img class="mx-auto img-fluid" src="../../public/images/boolzap.jpg" alt="">
          </div>
          <p v-if="languages=='it' || languages == undefined" class="col ms-2 description">Boolzap è stato uno dei miei primi progetti con Vue.js, qui ho replicato Whatsapp web. Si possono inviare messaggi e si riceveranno delle risposte automatiche dopo pochi secondi sfruttando la funzione di "setTimeOut".</p>
          <p v-if="languages=='en'" class="col ms-2 description">Boolzap was one of my first projects with Vue.js, here I replicated Whatsapp web. You can send messages and you will receive automatic replies after a few seconds using the "setTimeOut" function.</p>
          <p v-if="languages=='de'" class="col ms-2 description">Boolzap war eines meiner ersten Projekte mit Vue.js, hier habe ich Whatsapp Web repliziert. Über die Funktion „setTimeOut“ können Sie Nachrichten versenden und erhalten nach wenigen Sekunden automatische Antworten.</p>
        </div>
        <div class="d-md-flex text-sm-center justify-content-center align-items-center mb-5" >
          <div class="col-12 col-lg-6 me-2-md">
            <img class="mx-auto img-fluid" src="../../public/images/comics.jpg" alt="">
          </div>
          <p v-if="languages=='it' || languages == undefined" class="col ms-2 description">Laravel-Comics è stato il mio primo progetto Laravel, utilizzando un database MySQL con i dati dei vari fumetti, ho ricreato la pagina DC.</p>
          <p v-if="languages=='en'" class="col ms-2 description">Laravel-Comics was my first Laravel project, using a MySQL database with data from various comics, I recreated the DC page.</p>
          <p v-if="languages=='de'" class="col ms-2 description">Laravel-Comics war mein erstes Laravel-Projekt, unter Verwendung einer MySQL-Datenbank mit Daten aus verschiedenen Comics habe ich die DC-Seite neu erstellt.</p>
        </div>
        <div class="d-md-flex text-sm-center justify-content-center align-items-center mb-5" >
          <div class="col-12 col-lg-6 me-2-md">
            <img class="mx-auto img-fluid" src="../../public/images/boolbnb.jpg" alt="">
          </div>
          <p v-if="languages=='it' || languages == undefined" class="col ms-2 description">Questo è stato il progetto finale del mio percorso da Full Stack Web Developer, è stato progettato da me ed il mio team di 5 persone utilizzando Laravel, qua si possono inserire e affittare appartamenti, è presente una ricerca con filtri che sfrutta l'API Tom-Tom per la localizzazione.</p>
          <p v-if="languages=='en'" class="col ms-2 description">This was the final project of my career as a Full Stack Web Developer, it was designed by me and my team of 5 people using Laravel, here you can enter and rent apartments, there is a search with filters that uses the Tom API -Tom for localization.</p>
          <p v-if="languages=='de'" class="col ms-2 description">Dies war das letzte Projekt meiner Karriere als Full Stack Web Developer, es wurde von mir und meinem 5-köpfigen Team mit Laravel entworfen, hier können Sie Wohnungen eingeben und mieten, es gibt eine Suche mit Filtern, die die Tom-API verwendet -Tom für Lokalisierung.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      languages: this.$route.query.lang,
      selLink: this.$route.name,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/style/main.scss'; 
</style>