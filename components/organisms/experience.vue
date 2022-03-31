<template>
	<v-row align="center" class="experience-con">
		<v-col cols="12" lg="5" class="d-flex justify-center">
			<div
				:class="`animate__animated animate__backInDown black--text ${
					width === 'extra-large' ? 'display-3' : 'display-2'
				}`"
			>
				Job Experience
			</div>
		</v-col>
		<v-col cols="12" lg="7" class="animate__animated animate__backInUp">
			<v-timeline align-top :dense="['large', 'extra-large'].includes(width)">
				<v-timeline-item
					fill-dot
					v-for="(job, i) in jobExperiences"
					:key="i"
					color="black"
					small
				>
					<v-row class="pt-1">
						<v-col cols="3">
                            <div>
    							<strong>{{ job.time }}</strong>
                            </div>
						</v-col>
						<v-col>
							<strong>{{ job.company }}</strong>
							<div class="text-caption mb-2">{{ job.title }}</div>
							<v-avatar
								class="mr-2"
								tile
								size="30"
								v-for="(tool, i) in job.tools"
								:key="i"
							>
								<v-img contain :src="`/img/${tool}`"></v-img>
							</v-avatar>
						</v-col>
					</v-row>
				</v-timeline-item>
			</v-timeline>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "jobExperience",

	created() {
		this.$nuxt.$emit("page-transition", "experience");
	},

	computed: {
		jobExperiences() {
			return [
				{
					time: "Jun - Aug 2020",
					company: "Increment Technologies",
					title: "Volunteer Web Developer",
					description: "Test Description",
					tools: ["vue.png", "laravel.png" ,"mysql.png"],
				},
				{
					time: "Aug 2020 - April 2021",
					company: "Softype Philippines Inc.",
					title: "Oracle NetSuite Technical Consultant/Developer",
					description: "Test Description",
					tools: ["js.png", "netsuite-1.png"],
				},
				{
					time: "March 2021 - Present",
					company: "CrewBloom Inc.",
					title: "Full-Stack Developer",
					description: "Test Description",
					tools: ["nuxt.png",'react.png', 'node.png',"strapi-2-01.png","mysql.png"],
				},
			];
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
	},
};
</script>

<style scoped>
.experience-con {
	height: 80vh;
}
</style>
