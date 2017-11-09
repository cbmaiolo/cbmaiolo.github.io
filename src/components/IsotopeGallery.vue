<template>
  <div>
  <div class="mainContent">

    <h4>Filter</h4>

    <!--- This is for a vuetify toggle button group but I don't like the group
    <v-btn-toggle mandatory v-model="toggle_model">
      <v-btn flat v-for="(val, key) in option.getFilterData"
      v-bind:data="val"
      v-bind:key="key"
      @click="filter(key)">{{key}}
      </v-btn>
    </v-btn-toggle>-->

    <div class="button-group">
      <v-btn flat v-for="(val, key) in option.getFilterData"
      v-bind:data="val"
      v-bind:key="key"
      :class="[key===filterOption? 'is-checked' : '']"
      @click="filter(key)">{{key}}
    </v-btn>
    </div>

    <isotope ref="cpt"
      :list="list"
      id="root_isotope"
      :options='option'
      @filter="filterOption=arguments[0]"
      v-images-loaded:on.progress="layout">
      <div class="box" v-for="element in list" @click="selected=element"  :key="element.id" >
        <img v-bind:src="element.src"/>
      </div>
    </isotope>
  </div>

  <div>
    <div v-if="selected" class="item">
      <input type="text" name="" v-model="selected.name">
      <br>
      <input type="text" name="" v-model="selected.id">
      <img v-bind:src="element.src"/>
    </div>
  </div>
  </div>
</template>

<script>
import isotope from 'vueisotope'
import imagesLoaded from 'vue-images-loaded'

export default {
  components: {
    isotope
  },
  directives: {
    imagesLoaded
  },
  name: 'IsotopeGallery',
  data () {
    return {
      list: [
        {
          src: require('../assets/whiteboard/LinkCloseup.jpg'),
          medium: 'whiteboard',
          id: 25
        },
        {
          src: require('../assets/Florence.jpg'),
          medium: 'photography',
          id: 7
        },
        {
          src: require('../assets/whiteboard/WonderWomanDetail.jpg'),
          medium: 'whiteboard',
          id: 12
        },
        {
          src: require('../assets/inktober/crooked.jpg'),
          medium: 'ink',
          id: 100
        },
        {
          src: require('../assets/inktober/fat.jpg'),
          medium: 'ink',
          id: 28
        },
        {
          src: require('../assets/inktober/feirce.jpg'),
          medium: 'ink',
          id: 3
        },
        {
          src: require('../assets/inktober/filthy.jpg'),
          medium: 'ink',
          id: 12
        },
        {
          src: require('../assets/inktober/gigantic.jpg'),
          medium: 'ink',
          id: 120
        },
        {
          src: require('../assets/inktober/graceful.jpg'),
          medium: 'ink',
          id: 150
        },
        {
          src: require('../assets/inktober/long.jpg'),
          medium: 'ink',
          id: 70
        },
        {
          src: require('../assets/inktober/screech.jpg'),
          medium: 'ink',
          id: 48
        },
        {
          src: require('../assets/inktober/shy.jpg'),
          medium: 'ink',
          id: 5
        },
        {
          src: require('../assets/inktober/sword.jpg'),
          medium: 'ink',
          id: 100
        }
      ],
      selected: null,
      filterOption: 'show all',
      option: {
        itemSelector: '.element-item',
        getFilterData: {
          'show all': function () {
            return true
          },
          'photography': function (el) {
            return el.medium === 'photography'
          },
          'painting': function (el) {
            return el.medium === 'oil' || el.category === 'acrylic'
          },
          'ink': function (el) {
            return el.medium === 'ink'
          },
          'whiteboard': function (el) {
            return el.medium === 'whiteboard'
          }
        },
        getSortData: {
          medium: 'medium'
        },
        sortBy: 'medium'
      }
    }
  },
  methods: {
    filter: function (key) {
      this.$refs.cpt.filter(key)
    },
    layout () {
      this.$refs.cpt.layout('masonry')
    }
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true
      return binding
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box img {
   width: 100%;
}

.item {
  float: left;
  width: 200px;
  padding-right: 5px;
  box-sizing: border-box;
  font-family: monospace;
  color: #333;
}

.is-checked {
  background-color: #E0E0E0 !important;
}

@media (max-width: 599px) {
  .item {
    width: 165px;
  }
  .gallery {
    width: 330px;
  }
}

@media (min-width: 600px) {
  .item {
    width: 250px;
  }
  .gallery {
    width: 500px;
  }
}
@media (min-width: 900px) {
  .item {
    width: 200px;
  }
  .gallery {
    width: 800px;
  }
}
@media (min-width: 1200px) {
  .item {
    width: 200px;
  }
  .gallery {
    width: 1000px;
  }
}
</style>
