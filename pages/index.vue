<template>
	<div
		v-touch="{
			left: () => swipe('Left'),
			right: () => swipe('Right'),
			up: () => swipe('Up'),
			down: () => swipe('Down'),
		}"
	>
		<dr-o-landing v-if="page === 1" />
		<dr-o-about-me v-if="page === 2" />
		<dr-o-skills v-if="page === 3" />
		<dr-o-experience v-if="page === 4" />
		<dr-o-contact v-if="page === 5" />
		<dr-a-float-btn-down v-if="['extra-large', 'large-screen', 'large', 'medium'].includes(width)" @click-down-btn="next" />
		<dr-a-float-btn-up v-if="['extra-large', 'large-screen', 'large', 'medium'].includes(width) && page !== 1" @click-up-btn="prev" />
	</div>
</template>

<script>
export default {
	name: "index-page",
	layout() {
		return "main";
	},

	data() {
		return {
			isActive: false,
			page: 1,
			swipeDirection: "None",
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
		}
	},

	methods: {
		swipe(direction) {
			this.swipeDirection = direction;
			console.log('Swipe Direction', direction)

			// Page 1

			if (this.page === 1 && direction === 'Left') {
				return this.next()
			}

			if (this.page === 1 && direction === 'Right') {
				return
			}

			// Page 2

			if (this.page === 2 && direction === 'Left') {
				return this.next()
			}

			if (this.page === 2 && direction === 'Right') {
				return this.prev()
			}

			// Page 3

			if (this.page === 3 && direction === 'Left') {
				return this.next()
			}

			if (this.page === 3 && direction === 'Right') {
				return this.prev()
			}
		},

		prev() {
			this.page--;
		},

		toTop() {
			this.$vuetify.goTo(0);
		},

		next() {
			this.page++;
		},
	},
};
</script>
