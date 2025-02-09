<script>
export default {
	name: "Instructors",
};
</script>

<template>
	<div class="course-instructors">
		<h3>instructors</h3>
		<div class="instructors-heading">
			<div class="instructors-img w-img">
				<NuxtLink to="/instructor"><img src="/img/course/course-instructors.png" alt="image not found"></NuxtLink>
			</div>
			<div class="instructors-body">
				<h5>
					<NuxtLink to="/instructor">David Allberto</NuxtLink>
				</h5>
				<span>Data Scientist, BDevs Ltd.</span>
				<div class="intructors-review">
					<i class="fas fa-star"></i>
					<span>4.7 (54 reviews)</span>
				</div>
				<div class="instructors-footer">
					<i class="fas fa-desktop"></i>
					<span>3 Coursess</span>
					<i class="far fa-user-friends"></i>
					<span>78,742 Students</span>
				</div>
			</div>
		</div>
		<div class="intructors-content">
			<p>Professionally, I come from the Data Science consulting space with experience in
				finance, retail, transport and other industries. I was trained by the best
				analytics mentors at Deloitte Australia and since starting on Udemy I have
				passed on my knowledge to spread around the world</p>
		</div>
	</div>
</template>