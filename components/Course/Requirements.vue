<script>
export default {
	name: "Requirements",
	props: {
		requirements: {
			type: String,
			required: true,
		},
	},
}
</script>

<template>
	<div class="course-requirements pt-45">
		<h4>{{ $t("Requirements") }}</h4>
		<div class="course-requirements-text">
			<ul>
				<li>{{ requirements }}</li>
			</ul>
		</div>
	</div>
</template>