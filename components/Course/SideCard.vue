<script>
export default {
	name: "SideCard",
	props: {
		courseImage: {
			type: String,
			required: true,
		},
	},
}
</script>

<template>
	<div class="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
		<div class="course-video-widget">
			<div class="course-widget-wrapper mb-30">
				<div class="course-video-thumb w-img">
					<img :src="courseImage" alt="image not found">
					<div class="sidber-video-btn">
						<span data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="popup-video"><i
								class="fas fa-play"></i></span>
					</div>
				</div>
				<div class="course-video-price">
					<span>$147.00</span>
				</div>
				<div class="course-video-body">
					<ul>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-filter"></i>
								<span>Level</span>
							</div>
							<div class="video-corse-info">
								<span>Beginners</span>
							</div>
						</li>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-computer"></i>
								<span>Lectures</span>
							</div>
							<div class="video-corse-info">
								<span>8 Lectures</span>
							</div>
						</li>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-clock"></i>
								<span>Duration</span>
							</div>
							<div class="video-corse-info">
								<span>1h 30m 12s</span>
							</div>
						</li>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-menu-2"></i>
								<span>Category</span>
							</div>
							<div class="video-corse-info">
								<span>Data Science</span>
							</div>
						</li>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-global"></i>
								<span>Laguage</span>
							</div>
							<div class="video-corse-info">
								<span>English</span>
							</div>
						</li>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-bookmark-white"></i>
								<span>Access</span>
							</div>
							<div class="video-corse-info">
								<span>Full Lifetime</span>
							</div>
						</li>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-award"></i>
								<span>Certificate</span>
							</div>
							<div class="video-corse-info">
								<span>Yes </span>
							</div>
						</li>
						<li>
							<div class="course-vide-icon">
								<i class="flaticon-list"></i>
								<span>Recourse</span>
							</div>
							<div class="video-corse-info">
								<span>5 Downloadable Files </span>
							</div>
						</li>
					</ul>
				</div>
				<div class="video-wishlist">
					<NuxtLink to="/cart" class="video-cart-btn"><i class="fal fa-shopping-cart"></i> Add
						to cart</NuxtLink>
					<NuxtLink to="/wishlist" class="video-wishlist-btn"><i class="far fa-heart"></i> Add
						to Wishlist</NuxtLink>
				</div>
				<div class="course-gift">
					<div class="course-apply-coupon">
						<a href="#">Apply Coupon</a>
					</div>
					<div class="course-gift-coupon">
						<a href="#">Gift Courses</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>