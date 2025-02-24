<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { navigateTo } from "#app";
import SignUpMain from "~~/components/SignUp/SignUpMain.vue";

const authStore = useAuthStore();

onMounted(() => {
    if (authStore.user) {
        navigateTo("/");
    }
});
</script>

<template>
    <SignUpMain />
</template>
