<script>
export default {
	name: "description",
	props: {
		course: {
			type: Object,
			required: true
		}
	},
}
</script>

<template>
	<div class="course-heading mb-20">
		<h2>{{ course.title }}</h2>
		<div class="course-star">
			<ul>
				<li><i :class="course.productRating1"></i></li>
			</ul>
			<ul>
				<li><i :class="course.productRating2"></i></li>
			</ul>
			<ul>
				<li><i :class="course.productRating3"></i></li>
			</ul>
			<ul>
				<li><i :class="course.productRating4"></i></li>
			</ul>
			<ul>
				<li><i :class="course.productRating5"></i></li>
			</ul>
			<span>(254 reviews)</span>
		</div>
	</div>
	<div class="course-detelis-meta">
		<div class="course-meta-wrapper border-line-meta">
			<div class="course-meta-img">
				<NuxtLink to="/instructor"><img :src="course.instructorImage" alt="course-meta">
				</NuxtLink>
			</div>
			<div class="course-meta-text">
				<span>Created by</span>
				<h6>
					<NuxtLink to="/instructor">{{ course.instructor }}</NuxtLink>
				</h6>
			</div>
		</div>
		<div class="course-Enroll border-line-meta">
			<p>Total Enrolled</p>
			<span>5,420</span>
		</div>
		<div class="course-update border-line-meta">
			<p>Last Update</p>
			<span>01 January 2022 </span>
		</div>
		<div class="course-category">
			<p>01 January 2022 </p>
			<span>
				<NuxtLink to="/course">{{ course.badge }}</NuxtLink>
			</span>
		</div>
	</div>
	<div class="course-description pt-45 pb-30">
		<div class="course-Description">
			<h4>{{ $t("Description") }}</h4>
		</div>
		<p>{{ course.description }}</p>
	</div>
</template>