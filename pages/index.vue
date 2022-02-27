<template>
	<div :class="page === 1 ? 'a-container' : ''">
		<dr-o-landing v-if="page === 1" />
		<dr-o-about-me v-if="page === 2" />
		<dr-a-float-btn-down @click-down-btn="next"/>
    <dr-a-float-btn-up @click-up-btn="prev"  v-if="page !== 1" />
	</div>
</template>

<script>
export default {
	name: "index-page",
	layout: "main",

	data() {
		return {
			isActive: false,
			page: 1,
		};
	},

	computed: {
		isSmallScreen() {
			if (this.$vuetify.breakpoint.lgAndUp) {
				return true;
			}
			return false;
		},
	},

	methods: {
		prev() {
			console.log("PREV PAGE");
			this.page--;
		},

		next() {
			console.log("NEXT PAGE");
			this.page++;
		},
	},
};
</script>

<style scoped>
/* .a-container {
	background-image: url("/img/image-center.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
} */
.b-container {
	height: 80vh;
}
</style>
