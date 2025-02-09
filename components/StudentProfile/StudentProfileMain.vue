<template>
    <div>
        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-start -->
        <PageTitle pageTitle="User Profile" pageSubTitle="User Profile" />
        <!-- PageTitle-area-end -->

        <!-- StudentProfileContent-area-start -->
        <StudentProfileContent />
        <!-- StudentProfileContent-area-end -->

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
import StudentProfileContent from './StudentProfileContent.vue';

export default {
    name: "app",
    components: {
        HeaderFour,
        PageTitle,
        StudentProfileContent,
        FooterOne,
        ScrollToTop
    }
};
</script>