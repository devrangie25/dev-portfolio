<template>
	<v-row
		align="center"
		class="animate__animated animate__backInRight b-container skills"
	>
		<v-col cols="12" class="d-flex justify-center">
			<v-slide-group
				v-model="model"
				active-class="success"
				show-arrows
				center-active
                value="3"
			>
				<v-slide-item
					v-for="(work, i) in works"
					:key="i"
					v-slot="{ active, toggle }"
				>
					<v-card
						:color="active ? 'banana_primary' : 'transparent'"
						class="pa-4 rounded-0"
						height="500"
						width="380"
						@mouseenter="toggle"
						:flat="!active"
						:elevation="active ? '24' : '0'"
					>
						<v-card-title
                            :class="`d-flex justify-start mt-6 ${active ? 'black--text' : 'white--text'}`"
						>
							<div class="subtitle-1 font-weight-bold">
								{{ work.date }}
							</div>
						</v-card-title>
						<v-card-subtitle :class="active ? 'black--text' : 'white--text'">
							<div class="headline font-weight-black mt-2">
								{{ work.title }}
							</div>
							<div class="subtitle-1 font-weight-bold mt-2">
								{{ work.company }}
							</div>
						</v-card-subtitle>

						<v-card-text :class="active ? 'black--text px-4' : 'white--text px-4'" >
							<v-row>
								<v-col cols="12" class="d-flex justify-center">
									<div
										class="title text-justify"
									>
										<blockquote>
											{{ work.description }}
										</blockquote>
									</div>
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</v-slide-item>
			</v-slide-group>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "experience",

	data() {
		return {
			model: null,
			works: [
				{
					date: "March 2021 - Present",
					company: "CrewBloom Inc.",
					title: "Web Developer",
					description:
						"Currently working as Full-Stack Web Developer, using NuxtJs-Strapi-MySQL.",
				},
				{
					date: "December 2020 - April 2021",
					company: "Softype Philippines Inc.",
					title: "Technical Consultant",
					description:
						"I was an Oracle NetSuite Technical Consultant/Developer, I make NetSuite Customization Processess using SuiteScript 1.x, 2.x, and solved any issue related to technical that client encountered.",
				},
				{
					date: "June 2020 - August 2020",
					company: "Increment Technologies",
					title: "Web Developer",
					description:
						"I was once a volunteer Web Developer, which I helped to develop an Application for Contact Tracing of COVID-19.",
				},
				{
					date: "June 2020 - August 2020",
					company: "Increment Technologies",
					title: "Web Developer",
					description:
						"I was once a volunteer Web Developer, which I helped to develop an Application for Contact Tracing of COVID-19.",
				},
				{
					date: "June 2020 - August 2020",
					company: "Increment Technologies",
					title: "Web Developer",
					description:
						"I was once a volunteer Web Developer, which I helped to develop an Application for Contact Tracing of COVID-19.",
				},
			],
		};
	},

	created() {
		this.$nuxt.$emit("page-transition", "skills");
	},

	mounted() {
		console.log("Mounted Skills");
	},

	computed: {
		skills() {
			return ["css-3.png", "html-5.png", "mysql.png", "js.png"];
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
/* .skills {
	background-image: url("/img/blob-scene-haikei.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
    background-position-x: 0%;
} */
</style>
