import { defineStore } from "pinia";
import api from "@/utils/api";
import { navigateTo } from "#app";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null,
		loading: false,
		error: null,
	}),

	actions: {
		async register(formData) {
			this.loading = true;
			this.error = null;
			try {
				const response = await api().post("/api/users/register", formData);
				return response;
			} catch (error) {
				console.error("API Error:", error);
				this.error = error.response?.data?.message || "Registration failed";
			} finally {
				this.loading = false;
			}
		},

		async login(credentials) {
			this.loading = true;
			this.error = null;
			try {
				const res = await api().post("/api/users/login", credentials);

				if (res.status === 200) {
					await this.verifyUser();
					navigateTo("/");
				}

				return res;
			} catch (error) {
				console.error("API Error:", error);
				this.error = error.response?.data?.message || "Login failed";
			} finally {
				this.loading = false;
			}
		},

		async verifyUser() {
			this.loading = true;
			try {
				const res = await api().get("/api/users/verify");

				if (res.status === 200) {
					this.user = res.data;
				} else {
					this.user = null;
				}
			} catch (error) {
				console.error("User verification failed:", error);
				this.user = null;
			} finally {
				this.loading = false;
			}
		},

		async logout() {
			this.loading = true;
			try {
				await api().post("/api/users/signin");
				this.user = null;
				navigateTo("/login");
			} catch (error) {
				console.error("Logout failed:", error);
			} finally {
				this.loading = false;
			}
		},
	},
});
