<template>
  <div class="btn-group-bottom-right-fixed d-flex flex-column">
    <v-fab-transition>
      <v-btn @click="clickDownBtn" depressed color="banana_secondary" dark absolute top right fab>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  name: "float-btn-down",

  methods: {
      clickDownBtn(){
          this.$emit('click-down-btn', true)
      }
  }
};
</script>

<style scoped>
.btn-group-bottom-right-fixed {
  position: fixed;
  right: 1rem;
}
</style>
