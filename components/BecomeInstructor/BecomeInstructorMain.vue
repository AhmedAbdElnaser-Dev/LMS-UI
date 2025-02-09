<script>
import FooterOne from "../Common/FooterOne.vue";
import PageTitle from "../Common/PageTitle.vue";
import CounterSectionThree from "../HomeThree/CounterSectionThree.vue";
import knowledgeFeature from "./knowledgeFeature.vue";
import JourneySection from "./JourneySection.vue";
import InstructorToday from "./InstructorToday.vue";
import HeaderFour from "../Common/HeaderFour.vue";
import ScrollToTop from "../Common/ScrollToTop.vue";

export default {
    name: "app",
    components: {
    FooterOne,
    PageTitle,
    knowledgeFeature,
    CounterSectionThree,
    JourneySection,
    InstructorToday,
    HeaderFour,
    ScrollToTop
}
};
</script>

<template>
    <div>

        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-end -->
        <PageTitle pageTitle="Become an Instructor" pageSubTitle="Become an Instructor" />
        <!-- PageTitle-area-end -->

        <!-- knowledge-area-start -->
        <knowledgeFeature />
        <!-- knowledge-area-end -->

        <!-- CounterSection-area-start -->
        <CounterSectionThree />
        <!-- CounterSection-area-end -->

        <!-- journey-area-start -->
        <JourneySection />
        <!-- journey-area-end -->

        <!-- knowledge-area-start -->
        <InstructorToday />
        <!-- knowledge-area-end -->

        <!-- education-area-end -->
        <FooterOne />
        <!-- education-area-end -->

        <!-- scrolltop-area-start -->
        <ScrollToTop />
        <!-- scrolltop-area-end -->

    </div>

</template>

<style scoped>
</style>