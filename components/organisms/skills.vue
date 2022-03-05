<template>
	<v-row
		align="center"
		class="animate__animated animate__backInRight skills-con"
	>
		<v-col cols="12" lg="5" class="d-flex justify-center">
			<div v-if="!isHover" class="banana_primary--text display-2 font-weight-bold">
				<code>
					{{ `{ Skills }` }}
				</code>
			</div>
			<div v-else class="banana_primary--text display-2 font-weight-bold">
				<code>
					{{ `{ ${hoverTitle} }` }}
				</code>
			</div>
		</v-col>
		<v-col cols="12" lg="7">
			<v-row>
				<v-col
					cols="12"
					class="d-flex justify-center animate__animated animate__backInRight animate__delay-1s"
				>
					<v-row>
						<v-col
							class="d-flex justify-center"
							v-for="(skill, i) in skills"
							:key="i"
							cols="12"
							lg="3"
						>
							<v-hover v-slot="{ hover }" open-delay="50">
								<kinesis-container>
									<kinesis-element
										type="depth"
										:strength="20"
									>
										<v-card
											flat
											color="transparent"
											:class="`${
												hover ? 'on-hover' : ''
											} ma-2 px-2`"
											@mouseenter="onHover(skill.name)"
											@mouseleave="isHover = false"
										>
											<v-img
												:src="`/img/${skill.icon}`"
												:lazy-src="`/img/${skill.icon}`"
												:width="70"
												class="mx-1"
											>
											</v-img>
										</v-card>
									</kinesis-element>
								</kinesis-container>
							</v-hover>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "skills",

	data() {
		return {
			isHover: false,
			hoverTitle: ''
		};
	},

	created() {
		this.$nuxt.$emit("page-transition", "skills");
	},

	mounted(){
		this.$nuxt.$emit('current-page', 'skills')
	},

	computed: {
		skills() {
			return [
				{
					name: "HTML",
					icon: "html-5.png",
				},
				{
					name: "CSS",
					icon: "css-3.png",
				},
				{
					name: "Tailwind CSS",
					icon: "tailwind.png",
				},
				{
					name: "Vuetify",
					icon: "vuetify.png",
				},
				{
					name: "Bootstrap",
					icon: "bootstrap.svg",
				},
				{
					name: "JavaScript",
					icon: "js.png",
				},
				{
					name: "ReactJs",
					icon: "react.png",
				},
				{
					name: "VueJs",
					icon: "vue.png",
				},
				{
					name: "NuxtJs",
					icon: "nuxt.png",
				},
				{
					name: "NodeJs",
					icon: "node.png",
				},
				{
					name: "MySQL",
					icon: "mysql.png",
				},
				{
					name: "Git",
					icon: "git.png",
				},
				{
					name: "Linux OS",
					icon: "pop.png",
				},
			];
		},

		isSmallScreen() {
			if (this.$vuetify.breakpoint.lgAndUp) {
				return true;
			}
			return false;
		},
	},

	methods: {
		onHover(data){
			this.isHover = true
			this.hoverTitle = data
		}
	}
};
</script>

<style scoped>

.skills-con{
	height: 80vh;
}

.skills {
	background-image: url("/img/bracket-yellow.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.on-hover:hover {
	-ms-transform: scale(2.5); /* IE 9 */
	-webkit-transform: scale(2.5); /* Safari 3-8 */
	transform: scale(2.5);
}
</style>
