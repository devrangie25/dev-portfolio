<template>
  <v-app dark :class="dynamicClass">
    <v-app-bar app absolute :color="dynamicClass === 'bg-1' ? 'black' : 'banana_primary'" height="100" flat>
      <v-container>
        <v-row align="center" class="px-16">
          <picture>
            <v-img
              :src="dynamicClass === 'bg-1' ? '/img/my-logo-dark.png' : '/img/my-logo.png'"
              :lazy-src="dynamicClass === 'bg-1' ? '/img/my-logo-dark.png' : '/img/my-logo.png'"
              width="80"
            >
            </v-img>
          </picture>
          <v-spacer></v-spacer>
          <v-btn icon :color="dynamicClass  === 'bg-1' ? 'banana_primary' : 'banana_secondary'">
            <v-icon>
              mdi-linkedin
            </v-icon>
          </v-btn>
          <v-btn icon :color="dynamicClass  === 'bg-1' ? 'banana_primary' : 'banana_secondary'">
            <v-icon>
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn icon :color="dynamicClass  === 'bg-1' ? 'banana_primary' : 'banana_secondary'">
            <v-icon>
              mdi-gmail
            </v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'secondary',
  data(){
    return {
      activeClass: 'bg'
    }
  },

  computed: {
    dynamicClass: {
      set(val){
        this.activeClass = val
      },

      get(){
        return this.activeClass
      }
    }
  },

  created(){
    this.$nuxt.$on('page-transition', page => {
      const pages = {
        'about-me' : 'bg-1',
        'landing': 'bg',
        'skills': 'bg-1'
      }

      this.dynamicClass = pages[page]

      console.log('dynamicClass', this.dynamicClass)
      // if (page === 'about-me') {
      //   this.dynamicClass = 'bg-1'
      // } else {
      //   this.dynamicClass = 'bg'
      // }
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('about-me-page')
  }
}
</script>

<style scoped>
.bg {
  background: #e8d231 !important;
}

.bg-1 {
  background: black !important;
}
</style>
