<template>
	<div>
		<dr-o-landing />
		<dr-o-about-me />
		<dr-o-skills />
		<dr-o-experience />
		<dr-o-contact />
	</div>
</template>

<script>
export default {
	name: "desktop-page",

	data() {
		return {
			page: 1,
		};
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

	beforeMount() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},

	methods: {
		handleScroll() {
			// Your scroll handling here
			console.log(window.scrollY);
			if (window.scrollY < 300) {
				this.$nuxt.$emit("page-transition", "landing");
			}

			if (window.scrollY >= 500) {
				this.$nuxt.$emit("page-transition", "about-me");
			}

			if (window.scrollY >= 2500) {
				this.$nuxt.$emit("page-transition", "experience");
			}

			if (window.scrollY >= 3300) {
				this.$nuxt.$emit("page-transition", "contact");
			}
		}
	},
};
</script>
