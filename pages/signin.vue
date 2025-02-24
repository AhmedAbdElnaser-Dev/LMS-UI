<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { navigateTo } from "#app";
import SignInMain from "~~/components/SignIn/SignInMain.vue";

const authStore = useAuthStore();

onMounted(() => {
    if (authStore.user) {
        navigateTo("/");
    }
});
</script>

<template>
    <SignInMain />
</template>
