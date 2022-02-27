<template>
  <div class="btn-group-bottom-right-fixed d-flex flex-column">
    <v-fab-transition>
      <v-btn @click="clickUpBtn" depressed color="banana_secondary" dark absolute top right fab>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  name: "float-btn-up",

  methods: {
      clickUpBtn(){
          this.$emit('click-up-btn', true)
      }
  }
};
</script>

<style scoped>
.btn-group-bottom-right-fixed {
  position: fixed;
  right: 5rem;
}
</style>
