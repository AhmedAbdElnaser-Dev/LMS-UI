<script>
import FooterOne from "../Common/FooterOne.vue";
import FaqQues from "./FaqQues.vue";
import FaqBanner from "./FaqBanner.vue";
import HeaderFour from "../Common/HeaderFour.vue";
import FaqTopics from "./FaqTopics.vue";
import ScrollToTop from "../Common/ScrollToTop.vue";

export default {
    name: "app",
    components: {
        FooterOne,
        FaqQues,
        FaqBanner,
        HeaderFour,
        FaqTopics,
        ScrollToTop
    }
};
</script>

<template>
    <div class="faq-page">

        <!-- header-area-start -->
        <!-- <HeaderFour /> -->
        <!-- header-area-end -->

        <!-- FaqBanner-area-start -->
        <FaqBanner />
        <!-- FaqBanner-area-end -->

        <!-- FaqQues-area-start -->
        <FaqQues />
        <!-- FaqQues-area-end -->

        <!-- FaqTopic-area-start -->
        <FaqTopics />
        <!-- FaqTopic-area-end -->

        <!-- education-area-end -->
        <!-- <FooterOne /> -->
        <!-- education-area-end -->

        <!-- scrolltop-area-start -->
        <ScrollToTop />
        <!-- scrolltop-area-end -->

    </div>

</template>

<style scoped>
.faq-page {
    margin-top: 108px;
}
</style>
