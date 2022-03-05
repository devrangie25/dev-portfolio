<template>
	<v-row no-gutters>
		<v-col cols="12" class="rounded-lg mt-16 d-flex justify-center align-center animate__animated animate__backInDown about-me-description">
			<div
				class="headline font-weight-bold description black--text pa-16 animate__animated animate__backInRight animate__delay-1s"
			>
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
		this.$nuxt.$emit("page-transition", "about-me");
	},

	mounted() {
		this.$nuxt.$emit("current-page", "about-me");
	},
};
</script>

<style scoped>
.about-me-description {
	background: #e8d231 !important;
}
</style>
