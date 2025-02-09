<template>
	<div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
		<Header />

		<main>
			<NuxtPage />
		</main>

		<Footer />
	</div>
</template>

<script>
import Header from "~/components/Common/Header.vue";
import Footer from "~/components/Common/FooterOne.vue";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style scoped>
main {
	min-height: calc(100vh - 200px);
}
</style>
