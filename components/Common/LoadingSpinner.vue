<template>
	<div v-if="loading" class="loading-overlay">
		<div class="spinner-border text-primary" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
</template>

<script setup>
defineProps({
	loading: Boolean,
});
</script>

<style lang="scss" scoped>
.loading-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1050;
}
</style>
