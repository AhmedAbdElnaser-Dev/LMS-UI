<template>
    <div>
        <section class="course-detalis-area pt-100">
            <div class="container">
                <div class="row">
                    <div>
                        <div class="course-detalis-wrapper mb-30">
                            <div class="course-webinar-video">
                                <div class="course-video-thumb w-img">
                                    <img src="../../public/img/welcome.png" alt="img not found" />
                                    <div class="sidber-video-btn">
                                        <a class="popup-video" @click.prevent="handleVideoPopup"
                                            href="javascript:void(0)">
                                            <i class="fas fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="course-heading mb-20">
                                <h2>{{ $t("HowSiteWorkHeader") }}</h2>
                            </div>
                            <div class="course-description pb-30">
                                <p>
                                    {{ $t("HowSiteWorkText") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- video modal start -->
        <VideoModal v-if="isModalVisible" ref="videoModal" :videoUrl="videoUrl" @close="isModalVisible = false" />
        <!-- video modal end -->
    </div>
</template>


<script>
import VideoModal from "../Common/VideoModal.vue";

export default {
    name: "app",
    components: {
        VideoModal,
    },
    data() {
        return {
            isModalVisible: false,
            videoUrl: "/videos/welcome.mp4",
        };
    },
    methods: {
        handleVideoPopup() {
            this.isModalVisible = true; // Show the modal
        },
    },
};
</script>
