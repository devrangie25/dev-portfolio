<template>
	<v-row align="center" class="about-me-con">
		<v-col
			v-if="['extra-large', 'large'].includes(width)"
			cols="12"
			lg="6"
			class="d-flex justify-center align-center first-col animate__animated animate__backInDown rounded-lg"
		>
			<div>
				<v-img
					src="/img/big-head-1.svg"
					lazy-src="/img/big-head-1.svg"
					alt="Cell"
					:width="width === 'extra-large' ? 700 : 500"
				/>
			</div>
		</v-col>
		<v-col
			cols="12"
			lg="6"
			class="d-flex justify-center align-center second-col"
		>
			<div
				class="font-weight-bold description banana_primary--text px-12 animate__animated animate__backInUp"
			>
				<div :class="`${['extra-large', 'large'].includes(width) ? 'display-3' : 'display-1'} mb-6`">
					About me
				</div>
				<div :class="`${width === 'extra-large' ? 'headline' : 'title' } description`">
					{{ description }}
				</div>
				<div class="mt-6">
					<v-btn
						class="text-none rounded-lg "
						depressed
						width="180"
						:height="width === 'extra-large' ? 55 : 50"
						color="banana_primary"
						dark
					>
						
						<a href="/img/updated_resume_dev_rangie.pdf" download class="text-decoration-none font-weight-black black--text"><span class="btn-text"> Download Resume </span></a>
					</v-btn>
				</div>
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

	computed: {
		width() {
			const screenWidth = this.$vuetify.breakpoint.width;

			if (screenWidth < 600) {
				console.log("Extra Small Screen");
				return "extra-small";
			}
			if (screenWidth > 600 && screenWidth < 960) {
				console.log("Small Screen");
				return "small";
			}
			if (screenWidth > 960 && screenWidth < 1264) {
				console.log("Medium Screen");
				return "medium";
			}
			if (screenWidth > 1264 && screenWidth < 1904) {
				console.log("Large Screen");
				return "large";
			}
			if (screenWidth > 1904) {
				console.log("Extra Large Screen");
				return "extra-large";
			}
		}
	},
};
</script>

<style scoped>
.about-me-con {
	height: 80vh;
}

.first-col {
	/* background: #e8d231; */
	height: 80%;
}

.second-col {
	height: 100%;
}

.description {
	line-height: 3.2rem;
}
</style>
