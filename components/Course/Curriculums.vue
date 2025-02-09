<script>
export default {
	name: "app",
	props: {
		duration: {
			type: String,
			required: true,
		},
		curriculums: {
			type: Array,
			required: true,
		},
	},
};
</script>

<template>
	<div class="course-curriculum pt-40 pb-50">
		<div class="course-curriculam">
			<h4>{{ $t("Curriculums") }}</h4>
		</div>
		<ul>
			<li>{{ duration }}</li>
		</ul>
		<div class="course-curriculam-accodion mt-30">
			<div class="accordion" id="accordionExample">
				<!-- Loop through curriculums -->
				<div v-for="(curriculum, index) in curriculums" :key="index" class="accordion-item">
					<div class="accordion-body" :id="'heading' + index">
						<button class="accordion-button" type="button" data-bs-toggle="collapse"
							:data-bs-target="'#collapse' + index" :aria-expanded="index === 0" :aria-controls="'collapse' + index">
							<span class="accordion-header">
								<span class="accordion-tittle">
									<span>{{ curriculum.title }}</span>
								</span>
								<span class="accordion-tittle-inner">
									<span>{{ curriculum.lessons.length }} {{ $t("lectures") }} • ? {{ $t("m") }}</span>
								</span>
							</span>
						</button>
					</div>
					<div :class="['accordion-collapse collapse', { show: index === 0 }]" :id="'collapse' + index"
						:aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<!-- Loop through lessons -->
							<div v-for="(lesson, lessonIndex) in curriculum.lessons" :key="lessonIndex"
								class="course-curriculum-content d-sm-flex justify-content-between align-items-center">
								<div class="course-curriculum-info">
									<i class="flaticon-youtube"></i>
									<h4>{{ lesson }}</h4>
								</div>
								<div class="course-curriculum-meta">
									<span>5:30</span>
									<span class="time"> <i class="flaticon-lock"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- End of curriculum loop -->
			</div>
		</div>
	</div>
</template>
