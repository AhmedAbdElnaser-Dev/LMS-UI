<script>
import HeroSectionThree from './HeroSectionThree.vue';
import UniversityCard from './UniversityCard.vue';
import UniversityMessage from './UniversityMessage.vue';
import CounterSectionThree from './CounterSectionThree.vue';
import CampusSection from './CampusSection.vue';
import GallarySection from './GallarySection.vue';
import FooterTwo from '../Common/FooterTwo.vue';
import EventSection from './EventSection.vue';
import BlogSection from '../HomeTwo/BlogSection.vue';
import AcademicCourse from './academicCourse.vue';
import HeaderThree from '../Common/HeaderThree.vue';
import ScrollToTop from '../Common/ScrollToTop.vue';


export default {
    name: "app",
    components: {
    HeroSectionThree,
    UniversityCard,
    UniversityMessage,
    CounterSectionThree,
    CampusSection,
    GallarySection,
    FooterTwo,
    EventSection,
    BlogSection,
    AcademicCourse,
    HeaderThree,
    ScrollToTop
}
};
</script>

<template>
    <div>
        <!-- header-area-start -->
        <HeaderThree />
        <!-- header-area-end -->

        <!-- hero-area-start -->
        <HeroSectionThree />
        <!-- hero-area-end -->

        <!-- UniversityCard-area-start -->
        <UniversityCard />
        <!-- UniversityCard-area-end -->

        <!-- UniversityMessage-area-start -->
        <UniversityMessage />
        <!-- UniversityMessage-area-end -->

        <!-- acadeemic-course-area-start -->
        <AcademicCourse />
        <!-- acadeemic-course-area-end -->

        <!-- CounterSection-area-start -->
        <CounterSectionThree />
        <!-- CounterSection-area-end -->

        <!-- campus-area-start -->
        <CampusSection />
        <!-- campus-area-end -->

        <!-- event-area-start -->
        <EventSection />
        <!-- event-area-end -->

        <!-- blog-area-end -->
        <BlogSection />
        <!-- blog-area-end -->

        <!-- gallay-area-start -->
        <GallarySection />
        <!-- gallay-area-end -->

        <!-- footer-area-start -->
        <FooterTwo />
        <!-- footer-area-end -->

        <!-- scrolltop-area-start -->
        <ScrollToTop />
        <!-- scrolltop-area-end -->

    </div>

</template>

<style scoped>
</style>
