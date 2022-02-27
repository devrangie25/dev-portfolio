<template>
	<v-row
		align="center"
		class="b-container landing-container"
	>
		<v-col
			v-if="isSmallScreen"
			class="d-flex justify-center"
			cols="12"
			lg="5"
		>
			<div class="display-4 font-weight-bold">Web</div>
		</v-col>
		<v-col class="d-flex justify-center" cols="12" lg="2">
			<div></div>
		</v-col>
		<v-col
			v-if="isSmallScreen"
			class="d-flex justify-center"
			cols="12"
			lg="5"
		>
			<div
				class="display-4 font-weight-bold animate__animated animate__bounce animate__delay-2s"
			>
				Developer
			</div>
		</v-col>
	</v-row>
</template>

<script>
export default {
	created() {
		this.$nuxt.$emit("page-transition", "landing");
	},

	computed: {
		isSmallScreen() {
			if (this.$vuetify.breakpoint.lgAndUp) {
				return true;
			}
			return false;
		},
	},
};
</script>

<style scoped>
.landing-container {
	background-image: url("/img/image-center.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
</style>
