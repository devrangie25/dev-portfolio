<template>
	<v-row
		align="center"
		class="animate__animated animate__backInRight b-container"
	>
		<v-col cols="12" lg="4" class="d-flex justify-center">
			<div>
				<v-img src="/img/bracket-yellow.png" width="300"></v-img>
			</div>
		</v-col>
		<v-col cols="12" lg="8">
			<v-row>
				<v-col cols="12" class="d-flex justify-center">
					<v-slide-group multiple show-arrows>
						<v-slide-item v-for="(skill, i) in skills" :key="i">
							<v-card class="mx-2" flat color="transparent">
								<v-img
									:src="`/img/${skill}`"
									:lazy-src="`/img/${skill}`"
									width="70"
									class="mx-1"
								>
								</v-img>
							</v-card>
						</v-slide-item>
					</v-slide-group>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "skills",

	data() {
		return {};
	},

	created() {
		this.$nuxt.$emit("page-transition", "skills");
	},

	mounted() {
		console.log("Mounted Skills");
	},

	computed: {
		skills() {
			return [
                "css-3.png", 
                "html-5.png",
                "tailwind.png",
                "vuetify.png",
                "bootstrap.svg",
                "js.png", 
                "react.png", 
                "vue.png",
                "nuxt.png",
                "node.png", 
                "mysql.png"
            ];
		},

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
.skills {
	background-image: url("/img/bracket-yellow.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
</style>
