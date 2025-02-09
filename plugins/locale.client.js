export default defineNuxtPlugin((nuxtApp) => {
	const savedLocale = localStorage.getItem("locale") || "en";

	const i18n = nuxtApp.$i18n;

	if (i18n && i18n.locale._value !== savedLocale) {
		i18n.setLocale(savedLocale);
	}
});
