<template>
	<v-row no-gutters>
		<v-col cols="12" lg="6" class="d-flex justify-center">
			<div>
				<v-img
					src="/img/cropped-center-logo.png"
					lazy-src="/img/cropped-center-logo.png"
					alt="Cell"
				/>
			</div>
		</v-col>
		<v-col cols="12" lg="6" class="d-flex justify-center">
			<v-card flat color="transparent" class="pt-16">
				<v-card-title class="font-weight-bold black--text display-2">
					Hi, I'm Rangie!
				</v-card-title>
				<v-card-subtitle class="font-weight-bold black--text headline">
					Web Developer
				</v-card-subtitle>
				<v-card-text>
					<div class="mb-2 d-flex align-center">
						<v-btn fab small depressed class="btn">
							<v-icon> mdi-map-marker </v-icon>
						</v-btn>
						<span class="mx-2 black--text subtitle-1">
							<span class="mx-1 font-weight-black">Address:</span>
							<span class="font-weight-light">
								Cebu, Philippines
							</span>
						</span>
					</div>
					<div class="mb-2 d-flex align-center">
						<v-btn fab small depressed class="btn">
							<v-icon> mdi-phone </v-icon>
						</v-btn>
						<span class="mx-2 black--text subtitle-1">
							<span class="mx-1 font-weight-black">Phone:</span>
							<span class="font-weight-light">
								+639-380-738-443
							</span>
						</span>
					</div>
					<div class="mb-2 d-flex align-center">
						<v-btn fab small depressed class="btn">
							<v-icon> mdi-email </v-icon>
						</v-btn>
						<span class="mx-2 black--text subtitle-1">
							<span class="mx-1 font-weight-black">Email:</span>
							<span class="font-weight-light">
								devrangie25@gmail.com
							</span>
						</span>
					</div>
					<div class="mb-2 d-flex align-center">
						<v-btn fab small depressed class="btn">
							<v-icon> mdi-code-tags </v-icon>
						</v-btn>
						<span class="mx-2 black--text subtitle-1">
							<span class="mx-1 font-weight-black"
								>Experience:</span
							>
							<span class="font-weight-light"> 1+ year </span>
						</span>
					</div>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "landing",

	mounted() {
		this.$nuxt.$emit('current-page', 'landing')
	},

	computed: {
		isMobile() {
			console.log("width", this.$vuetify.breakpoint.width);
			if (this.$vuetify.breakpoint.mobile) {
				return true;
			}
		},

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
		},

		isTablet() {
			if (this.$vuetify.breakpoint.mdAndDown) {
				return true;
			}
		},
	},

	created() {
		this.$nuxt.$emit("page-transition", "landing");
	},
};
</script>

<style scoped>
.landing-con {
	height: 80vh;
}

.btn {
	pointer-events: none;
}
.small-cover {
	background-image: url("/img/image-center.png");
	background-repeat: no-repeat;
	background-size: 50rem;
	background-position: center;
}

.cover-photo {
	background-image: url("/img/image-center.png");
	background-repeat: no-repeat;
	background-size: 100rem;
	background-position: center;
}
</style>
