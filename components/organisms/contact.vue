<template>
	<v-row
		align="center"
		:class="`${
			['small', 'extra-small'].includes(width) ? 'mb-16' : ''
		} contact-con`"
	>
		<v-row
			:class="`mt-16 ${
				['small', 'extra-small'].includes(width)
					? 'd-flex flex-column-reverse'
					: ''
			}`"
		>
			<v-col cols="12" class="d-flex justify-center mb-16">
				<div
					:class="`${
						['small', 'extra-small'].includes(width)
							? 'display-2'
							: 'display-3'
					} white--text`"
				>
					<div>Contact me</div>
					<v-divider
						v-for="i in 5"
						:key="i"
						class="mx-16 my_primary"
					></v-divider>
				</div>
			</v-col>
			<v-col cols="12" md="5">
				<div class="headline white--text font-weight-light mb-16 mt-2">
					Contact Info
				</div>
				<div class="white--text mb-10">
					<v-icon color="banana_primary" size="28" class="mt-n2">
						mdi-map-marker
					</v-icon>
					<span class="ml-2 title">Cebu, Philippines</span>
				</div>
				<div class="white--text mb-10">
					<v-icon color="banana_primary" size="28" class="mt-n1">
						mdi-gmail
					</v-icon>
					<span class="ml-2 title"> devrangie25@gmail.com </span>
				</div>
				<div class="white--text mb-16">
					<v-icon color="banana_primary" size="28" class="mt-n1">
						mdi-cellphone
					</v-icon>
					<span class="ml-2 title"> +63-938-073-8443 </span>
				</div>
				<div class="white--text">
					<div class="headline white--text mb-6">Follow me</div>
					<a
						href="https://www.linkedin.com/in/rangie-laurente-486600195/"
						target="_blank"
						class="text-decoration-none"
					>
						<v-icon
							color="banana_primary"
							size="28"
							class="mt-n1 pointer-event mr-1"
						>
							mdi-linkedin
						</v-icon>
					</a>
					<a
						href="https://github.com/rLaurentePn2k19"
						target="_blank"
						class="text-decoration-none"
					>
						<v-icon
							color="banana_primary"
							size="28"
							class="mt-n1 pointer-event mr-1"
						>
							mdi-github
						</v-icon>
					</a>
				</div>
			</v-col>
			<v-col cols="12" md="7">
				<form
					action="https://www.actionforms.io/e/r/rangie-laurente1-test"
					@submit="submitForm"
				>
					<v-row>
						<v-col cols="12">
							<label class="white--text title">Name</label>
							<v-text-field
								v-model="name"
								id="name"
								type="text"
								name="name"
								height="65"
								class="mt-2 my-text-style"
								color="banana_primary"
								:dark="isFocusName"
								:solo="!isFocusName"
								@focus="focusName"
								@blur="focusName"
								:rules="[rules.required]"
							></v-text-field>
						</v-col>
						<v-col cols="12" md="6">
							<label class="white--text title"
								>Phone Number</label
							>
							<v-text-field
								v-model="phone"
								id="phonenumber"
								type="number"
								name="phonenumber"
								color="banana_primary"
								:dark="isFocusPhone"
								:solo="!isFocusPhone"
								@focus="focusPhone"
								@blur="focusPhone"
								height="65"
								class="mt-2"
								:rules="[rules.required]"
							></v-text-field>
						</v-col>
						<v-col cols="12" md="6">
							<label class="white--text title">Email</label>
							<v-text-field
								v-model="email"
								id="email"
								type="email"
								name="email"
								color="banana_primary"
								:dark="isFocusEmail"
								:solo="!isFocusEmail"
								@focus="focusEmail"
								@blur="focusEmail"
								height="65"
								class="mt-2"
								:rules="[rules.required, rules.emailRules]"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<label class="white--text title"
								>Your Message</label
							>
							<v-textarea
								v-model="message"
								id="message"
								type="text"
								name="message"
								color="banana_primary"
								:dark="isFocusMessage"
								:solo="!isFocusMessage"
								@focus="focusMessage"
								@blur="focusMessage"
								class="mt-2"
								:rules="[rules.required]"
							></v-textarea>
						</v-col>
						<v-col cols="12">
							<v-hover v-slot="{ hover }">
								<v-btn
									type="submit"
									:width="
										[
											'extra-large',
											'large',
											'medium',
										].includes(width)
											? '25%'
											: '100%'
									"
									:loading="isLoading"
									:disabled="formArr.length < 4"
									height="70"
									class="rounded-lg black--text text-capitalize title font-weight-black"
									:outlined="hover"
									color="banana_primary"
								>
									Send Message
								</v-btn>
							</v-hover>
						</v-col>
					</v-row>
				</form>
			</v-col>
		</v-row>
	</v-row>
</template>

<script>
export default {
	name: "contactForm",
	data() {
		return {
			isFocusName: false,
			isFocusPhone: false,
			isFocusEmail: false,
			isFocusMessage: false,
			isLoading: false,
			rules: {
				required: (value) => !!value || "Required.",
				emailRules: (v) =>
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					"E-mail must be valid",
			},
			name: "",
			email: "",
			phone: "",
			message: "",
			formArr: [],
			isEmailValid: false,
			disabledBtn: true,
		};
	},

	created() {
		if (['extra-small', 'small', 'medium'].includes(this.width)) {
			this.$nuxt.$emit("page-transition", "contact");
		}
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

	watch: {
		formArr: function (val) {
			if (val) {
				let newArr = [...new Set(val)];
				if (newArr.length === 4) {
					this.disabledBtn = false;
				} else {
					this.disabledBtn = true;
				}
			}
		},

		name: function (val) {
			if (val) {
				this.formArr.push("name");
			} else {
				this.formArr = this.formArr.filter((e) => e !== "name");
			}
		},

		phone: function (val) {
			if (val) {
				this.formArr.push("phone");
			} else {
				this.formArr = this.formArr.filter((e) => e !== "phone");
			}
		},

		email: function (val) {
			if (val) {
				this.validateEmail(val);
				if (this.isEmailValid) {
					this.formArr.push("email");
				} else {
					this.formArr = this.formArr.filter((e) => e !== "email");
				}
			} else {
				this.formArr = this.formArr.filter((e) => e !== "email");
			}
		},

		message: function (val) {
			if (val) {
				this.formArr.push("message");
			} else {
				this.formArr = this.formArr.filter((e) => e !== "message");
			}
		},
	},

	methods: {
		validateEmail(value) {
			if (value) {
				const reg = /\S+@{1}[a-zA-Z]+\.[a-zA-Z]+/.test(value);
				if (reg) {
					this.isEmailValid = true;
				} else {
					this.isEmailValid = false;
				}
			}
		},

		submitForm() {
			this.isLoading = true;
		},

		focusName() {
			if (this.isFocusName) {
				this.isFocusName = false;
			} else {
				this.isFocusName = true;
			}
		},

		focusPhone() {
			if (this.isFocusPhone) {
				this.isFocusPhone = false;
			} else {
				this.isFocusPhone = true;
			}
		},

		focusEmail() {
			if (this.isFocusEmail) {
				this.isFocusEmail = false;
			} else {
				this.isFocusEmail = true;
			}
		},

		focusMessage() {
			if (this.isFocusMessage) {
				this.isFocusMessage = false;
			} else {
				this.isFocusMessage = true;
			}
		},
	},
};
</script>

<style scoped>
.contact-con {
	height: 100vh;
}

.pointer-event {
	cursor: pointer;
}

.my-text-style >>> .v-text-field__slot hint {
	color: yellow;
}
</style>
