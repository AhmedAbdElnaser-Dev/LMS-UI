export default defineNuxtPlugin((nuxtApp) => {
	if (process.client) {
		const savedLocale = localStorage.getItem("locale") || "en";
		if (savedLocale === "ar") {
			document.documentElement.dir = "rtl";
		}
		const i18n = nuxtApp.$i18n;

		if (i18n && i18n.locale._value !== savedLocale) {
			i18n.setLocale(savedLocale);
		}
	}
});
