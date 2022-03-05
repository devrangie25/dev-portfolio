<template>
	<div>
		<dr-o-landing v-if="page === 1" />
		<dr-o-about-mev2 v-if="page === 2" />
		<dr-o-skills v-if="page === 3" />
		<!-- <dr-a-float-btn-down @click-down-btn="next" /> -->
		<!-- <dr-a-float-btn-up @click-up-btn="prev" v-if="page !== 1" /> -->
	</div>
</template>

<script>
export default {
	name: "index-page",
	layout(context) {
		console.log('nuxt', context.app.nuxt)
		console.log('ctx', context)
		return 'main'
	},

	data() {
		return {
			isActive: false,
			page: 1,
		};
	},

	created(){
		this.$nuxt.$on('page-action', val => {
			const pages = {
				'landing': 1,
				'about-me': 2,
				'skills': 3
			}

			this.page = pages[val]
		})
	},

	computed: {
		isSmallScreen() {
			if (this.$vuetify.breakpoint.lgAndUp) {
				return true;
			}
			return false;
		},
	},

	methods: {
		prev() {
			console.log("PREV PAGE");
			this.page--;
		},

		next() {
			console.log("NEXT PAGE");
			this.page++;
		},
	},
};
</script>
