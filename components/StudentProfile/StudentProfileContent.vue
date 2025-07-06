<template>
    <div class="course-details-area pt-120 pb-100">
        <div class="container">
            <div class="student-profile-author pb-30">
                <div class="student-profile-author-img">
                    <img src="https://thumbs.dreamstime.com/b/joyful-d-cartoon-boy-islamic-attire-reads-quran-character-reading-ai-generated-308549544.jpg"
                        alt="img not found" />
                </div>
                <div class="student-profile-author-text">
                    <span>Hello,</span>
                    <h3 class='student-profile-author-name'>{{ authStore.user.firstName + " " + authStore.user.lastName
                    }}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-4">
                    <div class="student-profile-sidebar mb-30">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                    aria-selected="true"><i class="fas fa-tachometer-alt-fast"></i>
                                    Dashboard</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                    type="button" role="tab" aria-controls="profile" aria-selected="false"><i
                                        class="fas fa-user"></i> My Profile</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                    type="button" role="tab" aria-controls="contact" aria-selected="false"><i
                                        class="fas fa-graduation-cap"></i> Enrolled
                                    Courses</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="wishlist-tab" data-bs-toggle="tab"
                                    data-bs-target="#wishlist" type="button" role="tab" aria-controls="wishlist"
                                    aria-selected="false"><i class="fas fa-bookmark"></i> Wishlist</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews"
                                    type="button" role="tab" aria-controls="reviews" aria-selected="false"><i
                                        class="fas fa-star"></i> Reviews</button>
                            </li>
                            <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="quiz-tab" data-bs-toggle="tab" data-bs-target="#quiz"
                                    type="button" role="tab" aria-controls="quiz" aria-selected="false"><i
                                        class="fas fa-cubes"></i> My Quiz Attempts</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history"
                                    type="button" role="tab" aria-controls="history" aria-selected="false"><i
                                        class="fas fa-cart-plus"></i> Order
                                    History</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="ques-tab" data-bs-toggle="tab" data-bs-target="#ques"
                                    type="button" role="tab" aria-controls="ques" aria-selected="false"><i
                                        class="fas fa-fist-raised"></i> Question &
                                    Answer</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="setting-tab" data-bs-toggle="tab" data-bs-target="#setting"
                                    type="button" role="tab" aria-controls="setting" aria-selected="false"><i
                                        class="fas fa-cog"></i> Settings</button>
                            </li> -->
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="logout-tab" data-bs-toggle="tab" data-bs-target="#logout"
                                    type="button" role="tab" aria-controls="logout" aria-selected="false"
                                    @click="authStore.logout">
                                    <i class="fas fa-sign-out-alt"></i>Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8">
                    <div class="student-profile-content">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h4 class='mb-25'>Dashboard</h4>
                                <StudentProfileDashboard />
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h4 class='mb-25'>My Profile</h4>
                                <StudentProfileBio :student="authStore.user" />
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <h4 class='mb-25'>Enrolled Courses</h4>
                                <EnrollCourse />
                            </div>
                            <div class="tab-pane fade" id="wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
                                <h4 class='mb-25'>Wishlist</h4>
                                <WishlistCourses />
                            </div>
                            <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                <h4 class='mb-25'>Reviews</h4>
                                <WishlistReviews />
                            </div>
                            <div class="tab-pane fade" id="quiz" role="tabpanel" aria-labelledby="quiz-tab">
                                <p>No quiz attempts yet.</p>
                            </div>
                            <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
                                <h4 class='mb-25'>Order History</h4>
                                <!-- <StudentProfileOrder /> -->
                            </div>
                            <div class="tab-pane fade" id="ques" role="tabpanel" aria-labelledby="ques-tab">
                                <p>No question completed yet.</p>
                            </div>
                            <!-- <div class="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                                <h4 class='mb-25'>Settings</h4>
                                <StudentProfileSetting />
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StudentProfileDashboard from "./StudentProfileDashboard.vue"
import StudentProfileBio from "./StudentProfileBio.vue"
import WishlistCourses from "./WishlistCourses.vue"
import WishlistReviews from "./WishlistReviews.vue"
// import StudentProfileOrder from "./StudentProfileOrder.vue"
// import StudentProfileSetting from "./StudentProfileSetting.vue"
import EnrollCourse from "./EnrolledCourses/EnrollCourse.vue"
import { useAuthStore } from '@/stores/authStore';

export default {
    name: "app",
    setup() {
        const authStore = useAuthStore();
        return {
            authStore,
        };
    },
    components: {
        StudentProfileDashboard,
        StudentProfileBio,
        EnrollCourse,
        WishlistCourses,
        WishlistReviews,
        // StudentProfileOrder,
        // StudentProfileSetting,
    }
};
</script>