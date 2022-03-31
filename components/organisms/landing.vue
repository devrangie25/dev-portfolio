<template>
	<v-row no-gutters class="landing-con ">
		<v-col cols="12" lg="6" class="d-flex justify-center align-center">
			<v-card flat color="transparent" class="animate__animated animate__backInDown">
				<v-card-title
					:class="`font-weight-bold black--text text-break ${
						width === 'extra-large' ? 'display-4' : 'display-3'
					}`"
				>
					Hello, I'm <br />
					Rangie Laurente
				</v-card-title>
				<v-card-subtitle
					:class="`ml-1 font-weight-light black--text ${
						width === 'extra-large' ? 'display-2' : 'display-1'
					} mt-1 text-uppercase`"
				>
					Full-Stack Developer
				</v-card-subtitle>
				<v-card-actions class="ml-3">
					<v-btn
						class="text-none rounded-lg font-weight-black"
						depressed
						:width="['extra-small', 'small'].includes(width) ? '100%' : 160"
						:height="width === 'extra-large' ? 55 : 50"
						color="black"
						dark
					>
						Hire me
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
		<v-col v-if="['extra-large', 'large', 'medium'].includes(width)" cols="12" lg="6" class="d-flex justify-center align-center">
			<div class="animate__animated animate__backInUp animate__delay">
				<v-img
					src="/img/cropped-center-logo.png"
					lazy-src="/img/cropped-center-logo.png"
					alt="Cell"
					:width="width === 'extra-large' ? 700 : width === 'large' ? 600 : width === 'medium' ? 400 : 300"
				/>
			</div>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "landing",

	transition: {
		afterLeave(el) {
			console.log("afterLeave", el);
		},
	},

	created() {
		this.$nuxt.$emit("page-transition", "landing");
	},

	watch: {
		width: function (val) {
			console.log("screen width", val);
		},
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
		},
	},
};
</script>

<style scoped>
.btn-text {
	letter-spacing: 0.1rem;
}

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
