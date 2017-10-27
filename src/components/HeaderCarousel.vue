<template>
  <v-carousel hide-controls>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'HeaderCarousel',
  data () {
    return {
      items: [
        {
          src: require('../assets/Parkour.jpg')
        },
        {
          src: require('../assets/Kaylee.jpg')
        },
        {
          src: require('../assets/Florence.jpg')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  height: 300px;
}
</style>
