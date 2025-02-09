import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.config.globalProperties.$translate = async (text, targetLang) => {
		try {
			const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					q: text,
					target: targetLang,
				}),
			})

			const data = await response.json()
			return data.data.translations[0].translatedText
		} catch (error) {
			console.error('Translation error:', error)
			return text
		}
	}
})