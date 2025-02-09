<template>
    <div>
        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-start -->
        <PageTitle pageTitle="Forgot Password" pageSubTitle="Forgot Password" />
        <!-- PageTitle-area-end -->

        <!-- ForgotPasswordContent-area-start -->
        <ForgotPasswordContent />
        <!-- ForgotPasswordContent-area-end -->

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
import ForgotPasswordContent from './ForgotPasswordContent.vue';

export default {
    name: "app",
    components: {
    HeaderFour,
    PageTitle,
    ForgotPasswordContent,
    FooterOne,
    ScrollToTop
}
};
</script>