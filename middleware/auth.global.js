import { useAuthStore } from "@/stores/authStore";
import { navigateTo } from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
	const authStore = useAuthStore();

	await authStore.verifyUser();

	if (authStore.user) {
		if (to.path === "/signin" || to.path === "/signup") {
			return navigateTo("/");
		}
	}
});
