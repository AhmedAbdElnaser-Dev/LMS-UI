<script>
export default {
	name: "Reviews",
	data() {
		return {
			showComments: false,
			showAlloutcomes: false,
		};
	},
	methods: {
		handleComments() {
			this.showComments = !this.showComments;
		},
	}
}
</script>

<template>
	<div class="course-detalis-reviews pt-15">
		<div class="course-detalis-reviews-tittle">
			<h3>Reviews</h3>
		</div>
		<div class="course-review-item mb-30">
			<div class="course-reviews-img">
				<a href="#"><img src="/img/course/course-reviews-1.png" alt="image not found"></a>
			</div>
			<div class="course-review-list">
				<h5><a href="#">Sotapdi Kunda</a></h5>
				<div class="course-start-icon">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<span>55 min ago</span>
				</div>
				<p>Very clean and organized with easy to follow tutorials, Exercises, and
					solutions.
					This course does start from the beginning with very little knowledge and
					gives a
					great overview of common tools used for data science and progresses into
					more
					complex concepts and ideas.</p>
			</div>
		</div>
		<div class="course-review-item mb-30">
			<div class="course-reviews-img">
				<a href="#"><img src="/img/course/course-reviews-2.png" alt="image not found"></a>
			</div>
			<div class="course-review-list">
				<h5><a href="#">Samantha</a></h5>
				<div class="course-start-icon">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<span>45 min ago</span>
				</div>
				<p>The course is good at explaining very basic intuition of the concepts. It
					will get
					you scratching the surface so to say. where this course is unique is the
					implementation methods are so well defined Thank you to the team !.</p>
			</div>
		</div>
		<div class="course-review-item mb-30">
			<div class="course-reviews-img">
				<a href="#"><img src="/img/course/course-reviews-3.png" alt="image not found"></a>
			</div>
			<div class="course-review-list">
				<h5><a href="#">Michell Mariya</a></h5>
				<div class="course-start-icon">
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<i class="fas fa-star"></i>
					<span>30 min ago</span>
				</div>
				<p>This course is amazing..!
					I started this course as a beginner and learnt a lot. Instructors are great.
					Query
					handling can be improved.Overall very happy with the course.</p>
			</div>
		</div>
	</div>
	<div class="col-xl-12">
		<div class="course-review-btn">
			<a id="show-review-box" class="edu-btn" @click="handleComments" href="javascript:void(0)">Write a Review</a>
			<div id="review-box" :class="`${showComments ? 'review-comment mt-45 d-block' : 'review-comment mt-45'}`">
				<div class="comment-title mb-20">
					<p>Your email address will not be published. Required fields are marked *
					</p>
				</div>
				<div class="comment-rating mb-20">
					<span>Overall ratings</span>
					<ul>
						<li><a href="#"><i class="fas fa-star"></i></a></li>
						<li><a href="#"><i class="fas fa-star"></i></a></li>
						<li><a href="#"><i class="fas fa-star"></i></a></li>
						<li><a href="#"><i class="fas fa-star"></i></a></li>
						<li><a href="#"><i class="fal fa-star"></i></a></li>
					</ul>
				</div>
				<div class="comment-input-box mb-15">
					<form action="#">
						<div class="row">
							<div class="col-xxl-12">
								<textarea placeholder="Your review" class="comment-input comment-textarea mb-20"></textarea>
							</div>
							<div class="col-xxl-6">
								<div class="comment-input mb-20">
									<input type="text" placeholder="Your Name">
								</div>
							</div>
							<div class="col-xxl-6">
								<div class="comment-input mb-20">
									<input type="email" placeholder="Your Email">
								</div>
							</div>
							<div class="col-xxl-12">
								<div class="comment-submit">
									<button type="submit" class="edu-btn">Submit</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

	</div>
</template>