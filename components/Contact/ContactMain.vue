<script>
import FooterOne from "../Common/FooterOne.vue";
import PageTitle from "../Common/PageTitle.vue";
import ContactFormSection from "./ContactFormSection.vue";
import HeaderFour from "../Common/HeaderFour.vue";
import ScrollToTop from "../Common/ScrollToTop.vue";

export default {
    name: "app",
    components: {
    FooterOne,
    PageTitle,
    ContactFormSection,
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

        <!-- PageTitle-area-start -->
        <PageTitle pageTitle="Contact" pageSubTitle="Contact" />
        <!-- PageTitle-area-end -->

        <!-- Contact-area-start -->
        <ContactFormSection />
        <!-- Contact-area-end -->

        <!-- Footer-area-start -->
        <FooterOne />
        <!-- Footer-area-end -->

        <!-- scrolltop-area-start -->
        <ScrollToTop />
        <!-- scrolltop-area-end -->
    </div>

</template>

<style scoped>
</style>