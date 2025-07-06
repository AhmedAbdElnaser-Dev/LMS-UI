<script>
import SideCard from "~/components/Course/SideCard.vue";
import Hero from "~/components/Course/Hero.vue";
import Description from "~/components/Course/Description.vue";
import Outcomes from "~/components/Course/Outcomes.vue";
import Requirements from "~/components/Course/Requirements";
import Curriculums from "~/components/Course/Curriculums.vue";
import Instructors from "~/components/Course/Instructors.vue";
import Feedback from "~/components/Course/Feedback.vue";
import Reviews from "~/components/Course/Reviews.vue";
import FooterOne from "~~/components/Common/FooterOne.vue";
import ar from "@/mixins/data(ar).json";
import en from "@/mixins/data(en).json";

export default {
    name: "app",
    components: {
        SideCard,
        Hero,
        Description,
        Outcomes,
        Requirements,
        Curriculums,
        Instructors,
        Feedback,
        Reviews,
        FooterOne,
    },
    data() {
        return {
            id: this.$route.params.id,
            course: {},
        };
    },
    methods: {
        fetchCourse() {
            if (this.currentLang === "ar") {
                this.course = ar.courses.find((item) => item.id == this.id);
            } else {
                this.course = en.courses.find((item) => item.id == this.id);
            }
        },
        toggleoutcomes() {
            this.showAlloutcomes = !this.showAlloutcomes;
        },
    },
    mounted() {
        this.fetchCourse();
    },
    computed: {
        currentLang() {
            return this.$i18n.locale;
        },
        visibleoutcomes() {
            return this.showAlloutcomes
                ? this.course.outcomes || []
                : (this.course.outcomes || []).slice(0, 5);
        },
        hasMoreoutcomes() {
            return this.course.outcomes && this.course.outcomes.length > 5;
        },
    },
    watch: {
        currentLang() {
            this.fetchCourse();
        },
    },
};
</script>


<template>
    <div>
        <Hero :title="course.title" />

        <section class="course-detalis-area pb-90">
            <div class="container">
                <div class="row">
                    <div class=" col-xxl-8 col-xl-8">
                        <div class="course-detalis-wrapper mb-30">

                            <Description :course="course" />

                            <Outcomes :outcomes="course.outcomes" />

                            <Requirements :requirements="course.requirements" />

                            <Curriculums :curriculums="course.curriculums" :duration="course.duration" />

                            <Instructors />

                            <Feedback />

                            <Reviews />

                        </div>
                    </div>

                    <SideCard :courseImage="course.courseImage" />

                </div>
            </div>
        </section>

        <div class="features-video-modal">
            <div class="course-video-popup">
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <iframe src="https://www.youtube.com/embed/wNwrSz3HYqE"
                                    title="YouTube video player"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.toggle-btn {
    margin-top: 10px;
    color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.toggle-btn:hover {
    color: #0056b3;
}
</style>