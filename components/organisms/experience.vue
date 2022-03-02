<template>
	<v-row align="center" class="b-container">
		<v-col cols="12" lg="5" class="d-flex justify-center">
			<div class="display-2 font-weight-bold">Job History</div>
		</v-col>
		<v-col cols="12" lg="7">
			<v-timeline align-top dense>
				<v-timeline-item color="black" small>
					<v-row class="pt-1">
						<v-col cols="3">
							<span class="body-2">
								<strong>Jun - Aug 2020</strong>
							</span>
						</v-col>
						<v-col>
							<strong>New Icon</strong>
							<div class="text-caption">Mobile App</div>
						</v-col>
					</v-row>
				</v-timeline-item>

				<v-timeline-item color="black" small>
					<v-row class="pt-1">
						<v-col cols="3">
							<span class="body-2">
								<strong>Jun - Aug 2020</strong>
							</span>
						</v-col>
						<v-col>
							<strong>Design Stand Up</strong>
							<div class="text-caption mb-2">Hangouts</div>
							<v-avatar>
								<v-img
									src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
								></v-img>
							</v-avatar>
							<v-avatar>
								<v-img
									src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
								></v-img>
							</v-avatar>
							<v-avatar>
								<v-img
									src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
								></v-img>
							</v-avatar>
						</v-col>
					</v-row>
				</v-timeline-item>

				<v-timeline-item color="black" small>
					<v-row class="pt-1">
						<v-col cols="3">
							<span class="body-2">
								<strong>Jun - Aug 2020</strong>
							</span>
						</v-col>
						<v-col>
							<strong>Lunch break</strong>
						</v-col>
					</v-row>
				</v-timeline-item>

				<v-timeline-item color="black" small>
					<v-row class="pt-1">
						<v-col cols="3">
							<span class="body-2">
								<strong>Jun - Aug 2020</strong>
							</span>
						</v-col>
						<v-col>
							<strong>Finish Home Screen</strong>
							<div class="text-caption">Web App</div>
						</v-col>
					</v-row>
				</v-timeline-item>
			</v-timeline>
		</v-col>
	</v-row>
</template>

<script>
export default {
	created() {
		this.$nuxt.$emit("page-transition", "experience");
	},
};
</script>
