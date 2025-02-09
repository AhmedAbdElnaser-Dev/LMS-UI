<template>
    <div>
        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-start -->
        <PageTitle pageTitle="Webinars" pageSubTitle="Webinars" />
        <!-- PageTitle-area-end -->

        <!-- WebinarsContent-area-start -->
        <WebinarsContent />
        <!-- WebinarsContent-area-end -->

        <!-- Footer-area-start -->
        <FooterOne />
        <!-- Footer-area-end -->

        <!-- scrolltop-area-start -->
        <ScrollToTop />
        <!-- scrolltop-area-end -->
    </div>
</template>


<script>
import FooterOne from '../Common/FooterOne.vue';
import HeaderFour from '../Common/HeaderFour.vue';
import PageTitle from '../Common/PageTitle.vue';
import ScrollToTop from '../Common/ScrollToTop.vue';
import WebinarsContent from './WebinarsContent.vue';

export default {
    name: "app",
    components: {
    HeaderFour,
    PageTitle,
    WebinarsContent,
    FooterOne,
    ScrollToTop
}
};
</script>