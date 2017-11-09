<template>
  <v-app id="app">
    <navBar/>
    <headerCarousel/>
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import HeaderCarousel from './components/HeaderCarousel'

export default {
  components: {
    'navBar': NavBar,
    'headerCarousel': HeaderCarousel
  },
  name: 'app'
}
</script>

<style>
@font-face {
  font-family: 'Maple';
  src: url("Maple.otf") format("truetype");
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.mainContent {
  margin: 0 auto;
}

.maple {
 font-family: 'Maple';
 text-transform: none !important;
}

.maple.h1 {
  font-size: 112px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
}
.maple.h2 {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}
.maple.h3 {
  font-size: 45px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: normal;
  margin-bottom: 16px;
}
.maple.h4 {
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: normal;
  margin-bottom: 16px;
}
.maple.h5 {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: normal;
  margin-bottom: 16px;
}
.maple.h6 {
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.02em;
  margin-bottom: 16px;
}
.maple.subheading {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
}
.maple.body-2 {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
}
.maple.body-1 {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
}
.maple.caption {
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 16px;
}
.maple.button {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
}

@media (max-width: 599px) {
  .maple.h1 {
    font-size: 67.2px;
  }
  .maple.h2 {
    font-size: 33.6px;
  }
  .maple.h3 {
    font-size: 27px;
  }
  .maple.h4 {
    font-size: 20.4px;
  }
  .maple.h5 {
    font-size: 14.399999999999999px;
  }
  .maple.h6 {
    font-size: 12px;
  }
  .maple.subheading {
    font-size: 9.6px;
  }
  .maple.body-2 {
    font-size: 8.4px;
  }
  .maple.body-1 {
    font-size: 8.4px;
  }
  .maple.caption {
    font-size: 7.199999999999999px;
  }
  .maple.button {
    font-size: 8.4px;
  }

  .mainContent {
    width: 330px;
  }
}

@media (min-width: 600px) {
  .mainContent {
    width: 500px;
  }
}
@media (min-width: 900px) {
  .mainContent {
    width: 800px;
  }
}
@media (min-width: 1200px) {
  .mainContent {
    width: 1000px;
  }
}
.maple {
 font-family: 'Maple';
 font-size: 50px;
}
</style>
