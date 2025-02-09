<template>
    <div>
        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-start -->
        <PageTitle pageTitle="Webinar Details" pageSubTitle="Webinar Details" />
        <!-- PageTitle-area-end -->

        <!-- SignInContent-area-start -->
        <WebinarDetailsContent />
        <!-- SignInContent-area-end -->

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
import WebinarDetailsContent from './WebinarDetailsContent.vue';

export default {
    name: "app",
    components: {
        HeaderFour,
        PageTitle,
        WebinarDetailsContent,
        FooterOne,
        ScrollToTop
    }
};
</script>