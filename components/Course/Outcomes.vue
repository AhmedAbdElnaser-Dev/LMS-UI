<script>
export default {
	name: "app",
	props: {
		outcomes: {
			type: Array,
			required: true,
			default: () => []
		}
	},
};
</script>

<template>
	<div class="course-learn-wrapper">
		<div class="course-learn">
			<div class="course-leranm-tittle">
				<h4 class="mb-15">{{ $t("WhatYouWillLearn") }}</h4>
			</div>
			<div class="row">
				<div class="col-xl-6">
					<div class="course-leran-text f-left">
						<ul>
							<li v-for="(outcome, index) in outcomes" :key="index">
								<i class="fa fa-check" aria-hidden="true" style="margin-right: 8px; color: #2467EC;"></i>
								{{ outcome }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>