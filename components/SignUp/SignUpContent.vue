<template>
    <div class="signup-page-area pt-120 pb-120">
        <div class="signup-page-area-wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-10">
                        <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="signup-box text-center">
                                        <div class="signup-text">
                                            <h3>{{ $t("SignUp") }}</h3>
                                        </div>
                                        <div class="signup-message">
                                            <img src="/img/sing-up/sign-up-message.png" alt="signup-message">
                                        </div>
                                        <div class="signup-thumb">
                                            <img src="/img/sing-up/sign-up.png" alt="signup">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="signup-form-wrapper">
                                        <!-- First Name -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.firstName" type="text"
                                                :placeholder="$t('FirstName')" required />
                                        </div>
                                        <!-- Last Name -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.lastName" type="text" :placeholder="$t('LastName')"
                                                required />
                                        </div>
                                        <!-- Email -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.email" type="email" :placeholder="$t('Email')"
                                                required />
                                        </div>
                                        <!-- Password -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.password" type="password"
                                                :placeholder="$t('Password')" required />
                                        </div>
                                        <!-- Age -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.age" type="number" min="8" max="120"
                                                :placeholder="$t('Age')" required />
                                        </div>
                                        <!-- Gender -->
                                        <div class="signup-wrapper">
                                            <select v-model="formData.gender" required>
                                                <option value="" disabled>{{ $t("SelectGender") }}</option>
                                                <option value="Male">{{ $t("Male") }}</option>
                                                <option value="Female">{{ $t("Female") }}</option>
                                                <option value="Other">{{ $t("Other") }}</option>
                                                <option value="PreferNotToSay">{{ $t("PreferNotToSay") }}</option>
                                            </select>
                                        </div>
                                        <!-- Timezone -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.timezone" type="text" :placeholder="$t('Timezone')"
                                                required />
                                        </div>
                                        <!-- Country -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.country" type="text" :placeholder="$t('Country')"
                                                required />
                                        </div>
                                        <!-- Telegram Number -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.telegramNumber" type="tel"
                                                :placeholder="$t('TelegramNumber')" required />
                                        </div>
                                        <!-- Available Time -->
                                        <div class="signup-wrapper">
                                            <input v-model="formData.availableTime" type="datetime-local"
                                                :placeholder="$t('AvailableTime')" required />
                                        </div>

                                        <div class="signup-action">
                                            <div class="course-sidebar-list">
                                                <input class="signup-checkbox" type="checkbox" id="sign-up"
                                                    v-model="formData.acceptTerms" required />
                                                <label class="sign-check" for="sign-up">
                                                    <span>{{ $t("AcceptTerms") }}
                                                        <NuxtLink to="#">{{ $t("PrivacyPolicy") }}</NuxtLink>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="sing-buttom mb-20">
                                            <button type="submit" class="sing-btn">{{ $t("RegisterNow") }}</button>
                                        </div>

                                        <div class="account-login text-center">
                                            <span>{{ $t("AlreadyHaveAccount") }}
                                                <NuxtLink to="/signin">{{ $t("Login") }}</NuxtLink>
                                            </span>
                                        </div>

                                        <div class="sign-social text-center">
                                            <span>{{ $t("OrSignInWith") }}</span>
                                        </div>
                                        <div class="sign-social-icon">
                                            <div class="sign-facebook">
                                                <NuxtLink to="#">Facebook</NuxtLink>
                                            </div>
                                            <div class="sign-gmail">
                                                <NuxtLink to="#">Google</NuxtLink>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { mapState, mapActions } from "pinia";

export default {
    data() {
        return {
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                age: null,
                gender: "",
                timezone: "",
                country: "",
                telegramNumber: "",
                availableTime: "",
                acceptTerms: false,
            },
        };
    },
    computed: {
        ...mapState(useAuthStore, ["loading", "error"]),
    },
    methods: {
        ...mapActions(useAuthStore, ["register"]),

        async handleSubmit() {
            const res = await this.register(this.formData);
            if (res)
                this.$router.push("/signin");
        },
    },
};
</script>

<style scoped>
.error {
    color: red;
}
</style>