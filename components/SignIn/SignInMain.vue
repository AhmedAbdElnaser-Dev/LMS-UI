<template>
    <div>
        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-start -->
        <PageTitle pageTitle="Sign In" pageSubTitle="Sign In" />
        <!-- PageTitle-area-end -->

        <!-- SignInContent-area-start -->
        <SignInContent />
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
import SignInContent from './SignInContent.vue';

export default {
    name: "app",
    components: {
    HeaderFour,
    PageTitle,
    SignInContent,
    FooterOne,
    ScrollToTop
}
};
</script>