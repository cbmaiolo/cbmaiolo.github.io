<template>
  <a href="https://www.linkedin.com/in/christine-maiolo-627a956b/" target="_blank">
  <v-avatar
  class="bubble"
  size="250px">
    <img src='../assets/ProfilePicSquare.jpg'
    alt="avatar">
  </v-avatar>
</a>
</template>

<script>
export default {
  name: 'BannerBubble',
  data () {
    return {
      profilesrc: '../assets/ProfilePic.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bubble {
  position: absolute;
  top: 300px;
  transform: translate(-50%, -50%);
}
</style>
