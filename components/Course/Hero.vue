<script>
export default {
	name: "hero",
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>

<template>
	<div class="hero-arera course-item-height"
		:style="{ backgroundImage: `url(/img/courses/banner.png)`, backgroundSize: 'contain' }">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="hero-course-1-text">
						<h2>{{ $t("CourseDetails") }}</h2>
					</div>
					<div class="course-title-breadcrumb">
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<NuxtLink to="/">{{ $t("Home") }}</NuxtLink>
								</li>
								<li class="breadcrumb-item"><span>{{ $t("Courses") }}</span></li>
								<li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>