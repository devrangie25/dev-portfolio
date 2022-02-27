<template>
	<v-row
		align="center"
		class="animate__animated animate__backInRight b-container"
	>
		<v-col cols="12" lg="5" class="d-flex justify-center">
			<div
				class="display-4 font-weight-bold animate__animated animate__backInUp animate__delay-1s banana_primary--text"
			>
				About Me
			</div>
		</v-col>
		<v-col cols="12" lg="7" class="d-flex justify-center">
			<div class="display-1 font-weight-bold description banana_primary--text">
				{{ description }}
			</div>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			description: `I graduated as scholar of Passerelles numeriques Philippines a French NGO, at the University of San Carlos - Talamban Campus with the course of Certificate of Computer Technology (CCT) major in Software Development. Programming is really one of passion aside from that, I also love playing Sports and Online Games.`,
		};
	},

	created() {
		console.log("Created About Me");
    this.$nuxt.$emit('page-transition', 'about-me')
	},

	mounted() {
		console.log("Mounted About Me");
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
.description {
	line-height: 3.2rem;
}
</style>
