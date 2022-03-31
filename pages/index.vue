<template>
	<div>
		<dr-t-desktop v-if="['extra-large', 'large'].includes(width)"/>
		<dr-t-mobile v-if="['extra-small', 'small', 'medium'].includes(width)"/>
	</div>
</template>

<script>
export default {
	name: "index",
	layout() {
		return "main";
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
