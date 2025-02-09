<script>
// import HeroSectionVue from "./HeroSection.vue";
import SliderSection from "./SliderSection.vue";
// import CategoriesSectionVue from "./CategoriesSection.vue";
import CourseSection from "./CourseSection.vue"
import StudentSection from "./StudentSection.vue"
import FeatureSection from "./FeatureSection.vue"
import BrowseCourse from "./BrowseCourse.vue"
import TestimonialSection from "./TestimonialSection.vue"
import EducationSection from "./EducationSection.vue"
// import BrandSection from "./BrandSection.vue"
import FooterOne from "../Common/FooterOne"
import Header from "../Common/Header.vue";
import ScrollToTop from "../Common/ScrollToTop.vue";
import HowSiteWork from "./HowSiteWork.vue";

export default {
    name: "app",
    components: {
        // HeroSectionVue,
        SliderSection,
        HowSiteWork,
        // CategoriesSectionVue,
        CourseSection,
        StudentSection,
        FeatureSection,
        BrowseCourse,
        TestimonialSection,
        EducationSection,
        // BrandSection,
        ScrollToTop
    },
};
</script>

<template>
    <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <!-- hero-area-start -->
        <!-- <HeroSectionVue /> -->
        <!-- hero-area-end -->

        <!-- slider-area-start -->
        <SliderSection />
        <!-- slider-area-end -->

        <!-- slider-area-start -->
        <HowSiteWork />
        <!-- slider-area-end -->


        <!-- categories-area-start -->
        <!-- <CategoriesSectionVue /> -->
        <!-- categories-area-end -->

        <!-- course-area-end -->
        <CourseSection />
        <!-- course-area-end -->

        <!-- feature-area-start -->
        <FeatureSection />
        <!-- feature-area-end -->

        <!-- student-area-start -->
        <StudentSection />
        <!-- student-area-end -->

        <!-- testimonial-area-end -->
        <!-- <TestimonialSection /> -->
        <!-- testimonial-area-end -->

        <!-- browse-area-start -->
        <!-- <BrowseCourse /> -->
        <!-- browse-area-end -->

        <!-- education-area-start -->
        <EducationSection />
        <!-- education-area-end -->

        <!-- brand-area-start -->
        <BrandSection />
        <!-- brand-area-end -->

        <!-- scrolltop-area-start -->
        <ScrollToTop />
        <!-- scrolltop-area-end -->

    </div>
</template>

<style scoped></style>
