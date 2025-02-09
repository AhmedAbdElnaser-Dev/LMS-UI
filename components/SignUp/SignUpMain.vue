<template>
    <div>
        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-start -->
        <PageTitle pageTitle="Sign Up" pageSubTitle="Sign Up" />
        <!-- PageTitle-area-end -->

        <!-- SignUpContent-area-start -->
        <SignUpContent />
        <!-- SignUpContent-area-end -->

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
import SignUpContent from './SignUpContent.vue';

export default {
    name: "app",
    components: {
    HeaderFour,
    PageTitle,
    SignUpContent,
    FooterOne,
    ScrollToTop
}
};
</script>