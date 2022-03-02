<template>
	<v-app dark :class="dynamicClass">
		<div class="center-div">
			<div class="absolute">
				<div class="mb-3">
					<v-btn fab small>
						<v-icon> mdi-instagram </v-icon>
					</v-btn>
				</div>
				<div class="mb-3">
					<v-btn fab small>
						<v-icon> mdi-linkedin </v-icon>
					</v-btn>
				</div>
				<div class="mb-3">
					<v-btn fab small>
						<v-icon> mdi-gmail </v-icon>
					</v-btn>
				</div>
				<div>
					<v-btn fab small>
						<v-icon> mdi-skype </v-icon>
					</v-btn>
				</div>
			</div>

			<div class="bottom-right">
				<div class="mb-3">
					<v-btn fab small>
						<v-icon> mdi-file-document </v-icon>
					</v-btn>
				</div>
			</div>
			<v-main>
				<v-container>
					<v-card
						elevation="24"
						color="transparent"
						outlined
						height="650"
					>
						<v-app-bar
							v-if="true"
							color="transparent"
							flat
							height="90"
						>
							<picture>
								<v-img
									:src="
										dynamicClass === 'bg-1'
											? '/img/my-logo-dark.png'
											: '/img/my-logo.png'
									"
									:lazy-src="
										dynamicClass === 'bg-1'
											? '/img/my-logo-dark.png'
											: '/img/my-logo.png'
									"
									width="80"
								>
								</v-img>
							</picture>

							<v-spacer></v-spacer>

							<v-btn
								depressed
								class="mr-2 text-capitalize font-weight-bold button"
								text
								@click="navActionLink('landing')"
							>
								Home
							</v-btn>

							<v-btn
								depressed
								class="mr-2 text-capitalize font-weight-bold button"
								text
								@click="navActionLink('about-me')"
							>
								About Me
							</v-btn>

							<v-btn
								depressed
								text
								class="mr-2 text-capitalize font-weight-bold button"
								@click="navActionLink('skills')"
							>
								Skills
							</v-btn>

							<v-btn
								depressed
								text
								class="mr-2 text-capitalize font-weight-bold button"
								@click="navActionLink('experience')"
							>
								Job Experience
							</v-btn>

							<v-btn
								depressed
								text
								class="mr-2 text-capitalize font-weight-bold button"
							>
								Portfolio
							</v-btn>

							<v-btn
								v-if="false"
								depressed
								dark
								fab
								:color="
									dynamicClass === 'bg-1'
										? 'banana_primary'
										: 'banana_secondary'
								"
							>
								<v-icon large> mdi-github </v-icon>
							</v-btn>
							<v-btn
								v-if="false"
								icon
								:color="
									dynamicClass === 'bg-1'
										? 'banana_primary'
										: 'banana_secondary'
								"
							>
								<v-icon> mdi-instagram </v-icon>
							</v-btn>
							<v-btn
								v-if="false"
								icon
								:color="
									dynamicClass === 'bg-1'
										? 'banana_primary'
										: 'banana_secondary'
								"
							>
								<v-icon> mdi-gmail </v-icon>
							</v-btn>
						</v-app-bar>
						<Nuxt />
					</v-card>
				</v-container>
			</v-main>
		</div>
	</v-app>
</template>

<script>
export default {
	name: "initial",
	data() {
		return {
			activeClass: "bg",
			currentPage: "",
		};
	},

	computed: {
		dynamicClass: {
			set(val) {
				this.activeClass = val;
			},

			get() {
				return this.activeClass;
			},
		},
	},

	created() {
		this.$nuxt.$on("page-transition", (page) => {
			this.currentPage = page;
			const pages = {
				"about-me": "bg-1",
				landing: "bg",
				skills: "bg-1",
				experience: "bg",
			};

			this.dynamicClass = pages[page];
		});
	},

	methods: {
		navActionLink(nav){
			this.$nuxt.$emit('page-action', nav)
		}
	},

	beforeDestroy() {
		this.$nuxt.$off("page-transition");
	},
};
</script>

<style scoped>
div.bottom-right {
	position: absolute;
	bottom: 3rem;
	right: 6rem;
}

div.absolute {
	position: absolute;
	left: 6rem;
}

.bg {
	background: #e8d231 !important;
}

.bg-1 {
	background: black !important;
}

.center-div {
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	flex: 1 !important;
	height: 100% !important;
}
</style>
