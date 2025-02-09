<template>
	<div class="video-modal">
		<div class="modal-overlay" @click="$emit('close')"></div>
		<div class="modal-content">
			<video :src="videoUrl" controls autoplay playsinline class="video-player">
			</video>
			<button class="close-btn" @click="$emit('close')"><i class="fas fa-close"></i></button>
		</div>
	</div>
</template>

<script>
export default {
	name: "VideoModal",
	props: {
		videoUrl: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
.video-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
}

.modal-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
}

.modal-content {
	position: relative;
	background: #fff;
	padding: 20px;
	border-radius: 8px;
	max-width: 800px;
	width: 100%;
}

.video-player {
	width: 100%;
	height: auto;
	border-radius: 8px;
}

.close-btn {
	position: absolute;
	top: 10px;
	right: 10px;
	background: #2467EC;
	color: #fff;
	border: none;
	padding: 5px 10px;
	cursor: pointer;
}
</style>
