<template>
  <v-toolbar fixed>
    <v-btn flat :to="{path: '/'}">cbmai</v-btn>
    <v-spacer></v-spacer>
    <!---<v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu open-on-hover>
        <v-btn flat :to="{path: '/gallery'}" slot="activator">Portfolio</v-btn>
          <v-list>
              <v-list-tile v-for="item in portfolio" :key="item.title" @click="">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
          </v-list>
      </v-menu>
      <v-menu open-on-hover bottom>
        <v-btn flat :to="{path: '/aboutme'}" slot="activator">Myself</v-btn>
          <v-list>
              <v-list-tile v-for="item in about" :key="item.title" @click="">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
          </v-list>
      </v-menu>
      <v-btn flat :to="{path: '/blog'}">Blog</v-btn>
    </v-toolbar-items>
  -->
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    about: [
    { title: 'About Me' },
    { title: 'Resume' },
    { title: 'Contact' }
    ],
    portfolio: [
    { title: 'Projects' },
    { title: 'Gallery' }
    ]
  })
}
</script>
