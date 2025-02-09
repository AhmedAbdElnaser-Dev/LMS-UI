<template>
	<div class="language-switcher">
		<select v-model="selectedLanguage" @change="changeLanguage" class="lang-select">
			<option value="en">English</option>
			<option value="ar">العربية</option>
			<option value="fr">Français</option>
			<option value="es">Español</option>
		</select>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const selectedLanguage = ref('en')
const emit = defineEmits(['languageChanged'])

const changeLanguage = async () => {
	emit('languageChanged', selectedLanguage.value)
}

onMounted(() => {
	// Load Google Translate script
	const script = document.createElement('script')
	script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`
	document.body.appendChild(script)

	// Initialize Google Translate
	window.googleTranslateElementInit = () => {
		new window.google.translate.TranslateElement({
			pageLanguage: 'en',
			autoDisplay: false,
			includedLanguages: 'en,ar,fr,es',
		})
	}
})
</script>

<style scoped>
.language-switcher {
	padding: 10px;
}

.lang-select {
	padding: 8px 12px;
	border-radius: 4px;
	border: 1px solid #ddd;
	background: white;
	cursor: pointer;
}

.lang-select:focus {
	outline: none;
	border-color: #4a90e2;
}
</style>