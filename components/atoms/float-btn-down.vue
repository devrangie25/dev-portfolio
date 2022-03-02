<template>
	<div class="btn-group-bottom-right-fixed d-flex flex-column">
		<v-fab-transition>
			<v-btn
				@click="clickDownBtn"
				depressed
				:color="btnColor"
				dark
				absolute
				top
				right
				fab
			>
				<v-icon>mdi-chevron-right</v-icon>
			</v-btn>
		</v-fab-transition>
	</div>
</template>

<script>
export default {
	name: "float-btn-down",

	data() {
		return {
			btnColor: "banana_secondary",
		};
	},

	// created() {
	// 	this.$nuxt.$on("page-transition", (page) => {
	// 		const pages = {
	// 			"about-me": "banana_primary",
	// 			"landing": "banana_secondary",
	// 			"skills": "banana_primary",
	// 		};

	// 		this.btnColor = pages[page];
	// 	});
	// },

	// beforeDestroy() {
	// 	this.$nuxt.$off("page-transition");
	// },

	methods: {
		clickDownBtn() {
			this.$emit("click-down-btn", true);
		},
	},
};
</script>

<style scoped>
.btn-group-bottom-right-fixed {
	position: fixed;
	right: 1rem;
}
</style>
