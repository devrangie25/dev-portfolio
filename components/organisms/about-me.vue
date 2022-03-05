<template>
	<v-row align="center">
		<v-col
			cols="12"
			lg="6"
			class="d-flex justify-center align-center first-col animate__animated animate__backInDown"
		>
			<div
				class="display-2 font-weight-bold animate__animated animate__backInUp animate__delay-1s black--text"
			>
				About me
			</div>
		</v-col>
		<v-col
			cols="12"
			lg="6"
			class="d-flex justify-center align-center second-col"
		>
			<div
				class="headline font-weight-bold description banana_primary--text px-12 animate__animated animate__backInRight"
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

	mounted(){
		this.$nuxt.$emit('current-page', 'about-me')
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
.about-me {
	height: 80vh;
}

.first-col {
	background: #e8d231;
	height: 80%;
}

.second-col {
	background: black;
	height: 100%;
}

.description {
	line-height: 3.2rem;
}
</style>
