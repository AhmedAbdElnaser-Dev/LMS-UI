<template>
    <div>
        <section class="course-detalis-area pb-70">
            <div class="container">
                <div class="row">
                    <div class=" col-xxl-8 col-xl-8">
                        <div class="course-detalis-wrapper mb-30">
                            <div class="course-webinar-video">
                                <div class="course-video-thumb w-img">
                                    <img src="/img/features/features1.jpg" alt="img not found">
                                    <div class="sidber-video-btn">
                                        <a class="popup-video" @click.prevent="handleVideoPopup" href="javascript:void(0)"><i class="fas fa-play"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="course-heading mb-20">
                                <h2>WordPress Development Course for Plugins</h2>
                            </div>
                            <div class="course-description pb-30">
                                <p>This webinar has been designed by two professional Data Scientists so that we can
                                    share our knowledge and help you learn complex theory, algorithms, and coding
                                    libraries in a simple way. We will walk you step-by-step into the World of Machine
                                    Learning. With every tutorial, you will develop new skills and improve your
                                    understanding of this challenging yet lucrative sub-field of Data Science.</p>
                            </div>
                            <div class="course-learn-wrapper mb-40">
                                <div class="course-learn">
                                    <div class="course-leranm-tittle">
                                        <h4 class="mb-15">What you'll learn</h4>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div class="course-leran-text f-left">
                                                <ul>
                                                    <li>Handle advanced techniques like Dimensionality Reduction</li>
                                                    <li>Handle specific topics like Reinforcement Learning best</li>
                                                    <li>Know which Machine Learning model to choose for each type of
                                                        problem</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="course-leran-text">
                                                <ul>
                                                    <li>Reinforcement learning upper
                                                        confidence bound Thompson sampling</li>
                                                    <li>Model Selection & Boosting fold cross
                                                        validation parameter</li>
                                                    <li>Use Machine Learning for personal
                                                        purpose of machine</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="webinar-speaker mb-10">
                                <h3 class="mb-25">Speakers</h3>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="member-main-wrapper mb-30">
                                            <div class="member-body text-center">
                                                <div class="member-item">
                                                    <div class="member-thumb">
                                                        <NuxtLink to="/instructor-proile"><img
                                                                src="/img/member/member-img-01.png" alt="member-img"></NuxtLink>
                                                    </div>
                                                    <div class="member-content">
                                                        <h4>
                                                            <NuxtLink to="/instructor-proile">Charls David</NuxtLink>
                                                        </h4>
                                                        <span>Data Scientist, Codexpand</span>
                                                    </div>
                                                    <div class="member-social">
                                                        <ul>
                                                            <li><a href="https://www.facebook.com/" target="_blank"><i
                                                                        class="fab fa-facebook"></i></a></li>
                                                            <li><a href="https://twitter.com/" target="_blank"><i
                                                                        class="fab fa-twitter"></i></a></li>
                                                            <li><a href="https://vimeo.com/" target="_blank"><i
                                                                        class="fab fa-vimeo-v"></i></a></li>
                                                            <li><a href="https://www.linkedin.com/" target="_blank"><i
                                                                        class="fab fa-linkedin"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="member-meta">
                                                <div class="member-reating">
                                                    <i class="fas fa-star"></i>
                                                    <span>4.8 (54k+)</span>
                                                </div>
                                                <div class="member-course">
                                                    <i class="flaticon-computer"></i><NuxtLink href="/course"><span>08 Courses</span></NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="member-main-wrapper mb-30">
                                            <div class="member-body text-center">
                                                <div class="member-item">
                                                    <div class="member-thumb">
                                                        <NuxtLink to="/instructor-proile"><img
                                                                src="/img/member/member-img-02.png" alt="member-img"></NuxtLink>
                                                    </div>
                                                    <div class="member-content">
                                                        <h4>
                                                            <NuxtLink to="/instructor-proile">Nicholson Ocak</NuxtLink>
                                                        </h4>
                                                        <span>UI/UX Researcher </span>
                                                    </div>
                                                    <div class="member-social">
                                                        <ul>
                                                            <li><NuxtLink href="https://www.facebook.com/" target="_blank"><i
                                                                        class="fab fa-facebook"></i></NuxtLink></li>
                                                            <li><NuxtLink href="https://twitter.com/" target="_blank"><i
                                                                        class="fab fa-twitter"></i></NuxtLink></li>
                                                            <li><NuxtLink href="https://vimeo.com/" target="_blank"><i
                                                                        class="fab fa-vimeo-v"></i></NuxtLink></li>
                                                            <li><NuxtLink href="https://www.linkedin.com/" target="_blank"><i
                                                                        class="fab fa-linkedin"></i></NuxtLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="member-meta">
                                                <div class="member-reating">
                                                    <i class="fas fa-star"></i>
                                                    <span>4.8 (54k+)</span>
                                                </div>
                                                <div class="member-course">
                                                    <i class="flaticon-computer"></i><NuxtLink href="/course"><span>12 Courses</span></NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="webinar-registration">
                                <h3 class="mb-25">Free Registration</h3>
                                <div class="webinar-registration-form">
                                    <form @submit.prevent="handleSubmit">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="contact-from-input mb-20">
                                                    <input type="text" placeholder="Name">
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="contact-from-input mb-20">
                                                    <input type="text" placeholder="Phone">
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="contact-from-input mb-20">
                                                    <input type="email" placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="contact-select">
                                                    <select class="mb-20">
                                                        <option value="Subject">Course</option>
                                                        <option value="Subject">Webinar</option>
                                                        <option value="Subject">Payment</option>
                                                        <option value="Subject">Information</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="contact-from-input mb-20">
                                                    <textarea placeholder="Message" name="message"></textarea>
                                                </div>
                                            </div>
                                            <div class="colxl-2 ">
                                                <div class="cont-btn mb-20">
                                                    <button type="submit" class="cont-btn">Registration</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
                        <div class="sidebar-widget-wrapper">
                            <div class="event-speaker-wrapper mb-30">
                                <div class="event-speaker-info">
                                    <h4>Speaker</h4>
                                </div>
                                <div class="event-sidebar-thumb w-img">
                                    <NuxtLink href="/instructor"><img src="/img/event/speaker.png" alt="Speaker"></NuxtLink>
                                </div>
                                <div class="event-speaker-content text-center">
                                    <span>
                                        <NuxtLink to="/instructor">Crish Denial</NuxtLink>
                                    </span>
                                    <p>Motivational Speaker</p>
                                </div>
                            </div>
                            <div class="event-information-wrapper mb-30">
                                <div class="event-price-info">
                                    <div class="event-ticket-cost">
                                        <span>Ticket Costs:</span>
                                    </div>
                                    <div class="event-price">
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div class="event-information-list">
                                    <ul>
                                        <li>
                                            <div class="information-list">
                                                <i class="flaticon-calendar"></i>
                                                <span>Date</span>
                                            </div>
                                            <div class="information-list">
                                                <span>10 Jan 2023</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="information-list">
                                                <i class="flaticon-clock"></i>
                                                <span>Schedule</span>
                                            </div>
                                            <div class="information-list">
                                                <span>10 AM - 12 PM</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="information-list">
                                                <i class="flaticon-place"></i>
                                                <span>Location</span>
                                            </div>
                                            <div class="information-list">
                                                <span>New York, TX 82760, US</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="information-list">
                                                <i class="flaticon-menu-2"></i>
                                                <span>Category</span>
                                            </div>
                                            <div class="information-list">
                                                <span>Business</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="information-list">
                                                <i class="flaticon-global"></i>
                                                <span>Laguage</span>
                                            </div>
                                            <div class="information-list">
                                                <span>English</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="information-list">
                                                <i class="flaticon-bookmark-white"></i>
                                                <span>Estimated Seat</span>
                                            </div>
                                            <div class="information-list">
                                                <span>470 Seats</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <button type="submit" class="event-btn">Join this Webinar</button>
                            </div>
                            <div class="event-sponsor-wrapper mb-30">
                                <div class="sopnsor-tittle">
                                    <h4>Sponsor by</h4>
                                </div>
                                <div class="sponsor-thumb">
                                    <a href="#"> <img src="/img/logo/sopnsor-logo-1.png" alt="sponsor-logo"></a>
                                    <a href="#"> <img src="/img/logo/sopnsor-logo-2.png" alt="sponsor-logo"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- video modal start -->
        <video-modal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />
        <!-- video modal end -->
    </div>
</template>

<script>
import VideoModal from "../Common/VideoModal.vue"

export default {
    name: "app",
    components: {
        VideoModal
    },
    methods: {
        handleVideoPopup() {
            this.$refs.video_modal.playVideo();
        },
        handleSubmit() { }
    }
}
</script>