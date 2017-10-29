<template>
  <div >
  <v-container fluid pl-5 pr-5>
    <v-layout row wrap>
      <v-flex xs12 sm6 order-sm2 order-xs1>
          <v-card dark tile flat color="error">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 order-sm1 order-sx2>
          <v-carousel :cycle="false" hide-controls>
            <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 order-sm2 order-xs1>
        <v-carousel :cycle="false" hide-controls>
          <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 sm6 order-sm1 order-xs2>
        <v-card dark tile flat color="red darken-4">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 order-sm2 order-xs1>
          <v-card dark tile flat color="error">
            <v-card-text>#1</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 order-sm1 order-sx2>
          <v-carousel :cycle="false" hide-controls>
            <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'ProjectSamplerGrid',
  data () {
    return {
      items: [
        {
          src: require('../assets/whiteboard/LinkCloseup.jpg')
        },
        {
          src: require('../assets/whiteboard/WonderWomanDetail.jpg')
        },
        {
          src: require('../assets/whiteboard/StarWarsAction.jpg')
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
