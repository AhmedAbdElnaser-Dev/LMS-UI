<template>
    <div :style="{ direction: langDir }">
        <header>

            <div
                :class="`${hideReminder ? 'header-note-area p-relative d-none d-md-block eduman-header-notice-hide' : 'header-note-area p-relative d-none d-md-block'}`">
                <div class="container-fluid">
                    <div class="note-text text-center">
                        <!-- <p>Enroll now and get <span>40% off</span> any course. Courses from <span>$5.99</span>.</p> -->
                        <div class="d-flex justify-content-around align-items-center">
                            <NuxtLink class="edo-course-sec-btn" :to="`/course-details`">
                                {{ $t("JoinFreeTrialLessons") }}
                            </NuxtLink>
                            <div class="footer-icon">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                :class="`${isSticky ? 'header-area header-transparent sticky-header sticky' : 'header-area header-transparent sticky-header'}`">
                <div class="container-fluid">
                    <div class="header-main-wrapper">
                        <div class="row align-items-center">
                            <div class="col-xl-8 col-lg-8 col-md-6 col-sm-10 col-10">
                                <div class="header-left d-flex align-items-center">
                                    <div class="header-logo">
                                        <NuxtLink to="/"><img src="/img/logo/colioured logo&text.svg" alt="logo">
                                        </NuxtLink>
                                    </div>
                                    <div class="main-menu d-none d-xl-block">
                                        <MainNav />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-2 col-2">
                                <div class="header-right d-flex align-items-center justify-content-end">
                                    <div class="translation-menu d-xl-block">
                                        <ul>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0)">
                                                    <svg fill="#000000" width="22" height="22" version="1.1"
                                                        id="anna_vital_language_icon" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256"
                                                        enable-background="new 0 0 256 256" xml:space="preserve">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path
                                                                d="M62.4,101c-1.5-2.1-2.1-3.4-1.8-3.9c0.2-0.5,1.6-0.7,3.9-0.5c2.3,0.2,4.2,0.5,5.8,0.9c1.5,0.4,2.8,1,3.8,1.7 c1,0.7,1.8,1.5,2.3,2.6c0.6,1,1,2.3,1.4,3.7c0.7,2.8,0.5,4.7-0.5,5.7c-1.1,1-2.6,0.8-4.6-0.6c-2.1-1.4-3.9-2.8-5.5-4.2 C65.5,105.1,63.9,103.2,62.4,101z M40.7,190.1c4.8-2.1,9-4.2,12.6-6.4c3.5-2.1,6.6-4.4,9.3-6.8c2.6-2.3,5-4.9,7-7.7 c2-2.7,3.8-5.8,5.4-9.2c1.3,1.2,2.5,2.4,3.8,3.5c1.2,1.1,2.5,2.2,3.8,3.4c1.3,1.2,2.8,2.4,4.3,3.8c1.5,1.4,3.3,2.8,5.3,4.5 c0.7,0.5,1.4,0.9,2.1,1c0.7,0.1,1.7,0,3.1-0.6c1.3-0.5,3-1.4,5.1-2.8c2.1-1.3,4.7-3.1,7.9-5.4c1.6-1.1,2.4-2,2.3-2.7 c-0.1-0.7-1-1-2.7-0.9c-3.1,0.1-5.9,0.1-8.3-0.1c-2.5-0.2-5-0.6-7.4-1.4c-2.4-0.8-4.9-1.9-7.5-3.4c-2.6-1.5-5.6-3.6-9.1-6.2 c1-3.9,1.8-8,2.4-12.4c0.3-2.5,0.6-4.3,0.8-5.6c0.2-1.2,0.5-2.4,0.9-3.3c0.3-0.8,0.4-1.4,0.5-1.9c0.1-0.5-0.1-1-0.4-1.6 c-0.4-0.5-1-1.1-1.9-1.7c-0.9-0.6-2.2-1.4-3.9-2.3c2.4-0.9,5.1-1.7,7.9-2.6c2.7-0.9,5.7-1.8,8.8-2.7c3-0.9,4.5-1.9,4.6-3.1 c0.1-1.2-0.9-2.3-3.2-3.5c-1.5-0.8-2.9-1.1-4.3-0.9c-1.4,0.2-3.2,0.9-5.4,2.2c-0.6,0.4-1.8,0.9-3.4,1.6c-1.7,0.7-3.6,1.5-6,2.5 c-2.4,1-5,2-7.8,3.1c-2.9,1.1-5.8,2.2-8.7,3.2c-2.9,1.1-5.7,2-8.2,2.8c-2.6,0.8-4.6,1.4-6.1,1.6c-3.8,0.8-5.8,1.6-5.9,2.4 c0,0.8,1.5,1.6,4.4,2.4c1.2,0.3,2.3,0.6,3.1,0.6c0.8,0.1,1.7,0.1,2.5,0c0.8-0.1,1.6-0.3,2.4-0.5c0.8-0.3,1.7-0.7,2.8-1.1 c1.6-0.8,3.9-1.7,6.9-2.8c2.9-1,6.6-2.4,11.2-4c0.9,2.7,1.4,6,1.4,9.8c0,3.8-0.4,8.1-1.4,13c-1.3-1.1-2.7-2.3-4.2-3.6 c-1.5-1.3-2.9-2.6-4.3-3.9c-1.6-1.5-3.2-2.5-4.7-3c-1.6-0.5-3.4-0.5-5.5,0c-3.3,0.9-5,1.9-4.9,3.1c0,1.2,1.3,1.8,3.8,1.9 c0.9,0.1,1.8,0.3,2.7,0.6c0.9,0.3,1.9,0.9,3.2,1.8c1.3,0.9,2.9,2.2,4.7,3.8c1.8,1.6,4.2,3.7,7,6.3c-1.2,2.9-2.6,5.6-4.1,8 c-1.5,2.5-3.4,5-5.5,7.3c-2.2,2.4-4.7,4.8-7.7,7.2c-3,2.5-6.6,5.1-10.8,7.8c-4.3,2.8-6.5,4.7-6.5,5.6C35,192.1,37,191.7,40.7,190.1z M250.5,81.8v165.3l-111.6-36.4L10.5,253.4V76.1l29.9-10V10.4l81.2,28.7L231.3,2.6v73.1L250.5,81.8z M124.2,50.6L22.3,84.6v152.2 l101.9-33.9V50.6L124.2,50.6z M219.4,71.9V19L138.1,46L219.4,71.9z M227,201.9L196.5,92L176,85.6l-30.9,90.8l18.9,5.9l5.8-18.7 l31.9,10l5.7,22.3L227,201.9z M174.8,147.7l22.2,6.9l-10.9-42.9L174.8,147.7z">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </a>
                                                <ul class="sub-menu">
                                                    <li v-for="item in locales">
                                                        <a href="javascript:void(0)" :key="item.code" :value="item.code"
                                                            @click="handleChangeLanguague(item)">{{ item.name }}</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-if="!authStore.user" class="user-btn-inner p-relative d-none d-md-block">
                                        <div class="user-btn-wrapper">
                                            <div class="user-btn-content ">
                                                <NuxtLink to="/signin" class="user-btn-sign-in">{{ $t("SignIn") }}
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="!authStore.user" class="d-none d-md-block">
                                        <NuxtLink to="/signup" class="user-btn-sign-up edu-btn">{{ $t("SignUp") }}
                                        </NuxtLink>
                                    </div>
                                    <div v-if="authStore.user">
                                        <NuxtLink to="/student-profile"
                                            class="d-flex justify-center flex-row gap-1 align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="40px"
                                                height="40px" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>

                                            <h4 class="mb-0">{{ authStore.user.firstName }}</h4>
                                        </NuxtLink>
                                    </div>
                                    <div class="menu-bar d-xl-none ml-20">
                                        <a class="side-toggle" href="javascript:void(0)" @click="handleSidebar">
                                            <div class="bar-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- header-area-end -->

        <!-- Mobile Menu Start -->
        <div class="fix">
            <div :class="`${showSidebar ? 'side-info info-open' : 'side-info'}`">
                <div class="side-info-content">
                    <div class="offset-widget offset-logo mb-40">
                        <div class="row align-items-center">
                            <div class="col-9">
                                <NuxtLink to="/"><img src="/img/logo/logo-black.png" alt="Logo"></NuxtLink>
                            </div>
                            <div class="col-3 text-end">
                                <button class="side-info-close" @click="handleSidebarClose"><i
                                        class="fal fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu d-xl-none fix mb-30">
                        <div class="sidebar-menu mm-menu">
                            <ul>
                                <li class="menu-item-has-children has-droupdown"
                                    v-bind:class="[menuOption.homeDropdown === true ? 'active' : '']">
                                    <a @click="menuOption.homeDropdown = !menuOption.homeDropdown">Home</a>
                                    <ul class="sub-menu" :class="[menuOption.homeDropdown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/">Home Style 1</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/homeTwo">Home Style 2</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/homeThree">Home Style 3</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children has-droupdown"
                                    :class="[menuOption.coursesDropdown === true ? 'active' : '',]">
                                    <a @click="menuOption.coursesDropdown = !menuOption.coursesDropdown">Course</a>
                                    <ul class="sub-menu"
                                        :class="[menuOption.coursesDropdown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/course">Courses Style 1</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/course-2">Course Style 2</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/course-3">Course Style 3</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/course-4">Course Style 4</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/course-details">Course Details</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/webinars">Webinars</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/webinar-details">Webinar Details</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children has-droupdown"
                                    :class="[menuOption.shopDropdown === true ? 'active' : '']">

                                    <a v-on:click="menuOption.shopDropdown = !menuOption.shopDropdown">Shop</a>
                                    <ul class="sub-menu" :class="[menuOption.shopDropdown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/shop">Shop</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/shop-details">Shop Details</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/wishlist">Wishlist</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/cart">Cart</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/checkout">Checkout</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children has-droupdown"
                                    :class="[menuOption.blogDropdown === true ? 'active' : '']">

                                    <a v-on:click="menuOption.blogDropdown = !menuOption.blogDropdown">Blog</a>
                                    <ul class="sub-menu" :class="[menuOption.blogDropdown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/blog">Blog</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/blog-details">Blog Details</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children has-droupdown"
                                    :class="[menuOption.instructorDropDown === true ? 'active' : '']">

                                    <a
                                        v-on:click="menuOption.instructorDropDown = !menuOption.instructorDropDown">Instructor</a>
                                    <ul class="sub-menu"
                                        :class="[menuOption.instructorDropDown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/instructor">Instructor</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/instructor-profile">Instructor Profile</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/student-profile">Student Profile</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/become-instructor">Become Instructor</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children has-droupdown"
                                    :class="[menuOption.faqDropDown === true ? 'active' : '']">

                                    <a v-on:click="menuOption.faqDropDown = !menuOption.faqDropDown">FAQ Page</a>
                                    <ul class="sub-menu" :class="[menuOption.faqDropDown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/faq-page">FAQ Page</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/faq-details">FAQ Details</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children has-droupdown"
                                    :class="[menuOption.eventDropDown === true ? 'active' : '']">

                                    <a v-on:click="menuOption.eventDropDown = !menuOption.eventDropDown">Event</a>
                                    <ul class="sub-menu" :class="[menuOption.eventDropDown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/event">Event</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/event-details">Event Details</NuxtLink>
                                        </li>
                                    </ul>
                                </li>

                                <li class="menu-item-has-children has-droupdown"
                                    :class="[menuOption.pagesDropDown === true ? 'active' : '',]">

                                    <a @click="menuOption.pagesDropDown = !menuOption.pagesDropDown">Pages</a>
                                    <ul class="sub-menu" :class="[menuOption.pagesDropDown === true ? 'active' : '',]">
                                        <li>
                                            <NuxtLink to="/about">About</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/zoom-class">Zoom Class</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/zoom-class-details">Zoom Class Details</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/membership">Membership</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/signin">Sign In</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/signup">Sign Up</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/404-page">Error Page</NuxtLink>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <NuxtLink to="/contact" class="border-0">Contact</NuxtLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="offset-widget offset_searchbar mb-30">
                        <div class="menu-search position-relative ">
                            <form action="#" class="filter-search-input">
                                <input type="text" placeholder="Search keyword">
                                <button><i class="fal fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div class="offset-widget offset_menu-top mb-20">
                        <div class="header-menu-top-icon mb-20">
                            <a href="tel:(555)674890556"><i class="fas fa-phone-alt"></i>(555) 674 890 556</a>
                            <a href="mailto:info@example.com"><i class="fal fa-envelope"></i>info@example.com</a>
                            <i class="fal fa-map-marker-alt"></i><span>3rd Avenue, San Francisco</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="`${showSidebar ? 'offcanvas-overlay overlay-open' : 'offcanvas-overlay'}`"
            @click="handleSidebarClose">
        </div>
    </div>
</template>
<script>
import CategoryDropdown from './CategoryDropdown.vue';
import MainNav from './MainNav.vue';
import SidebarCartWidget from './SidebarCartWidget.vue';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/stores/authStore';
import courses from '@/mixins/courses.json';

export default {
    name: "app",

    setup() {
        const { locales, setLocale } = useI18n();
        const authStore = useAuthStore();

        return {
            locales,
            setLocale,
            authStore,
        };
    },

    data() {
        return {
            langDir: "ltr",
            showCart: false,
            hideReminder: false,
            isSticky: false,
            showSidebar: false,
            menuOption: {
                menuShow: false,
                homeDropdown: false,
                coursesDropdown: false,
                shopDropdown: false,
                pagesDropDown: false,
                instructorDropDown: false,
                faqDropDown: false,
                eventDropDown: false,
                blogDropdown: false,
            },
        };
    },

    methods: {
        handleSticky() {
            this.isSticky = window.scrollY > 50;
        },
        handleSidebar() {
            this.showSidebar = true;
        },
        handleSidebarClose() {
            this.showSidebar = false;
        },
        handleReminder() {
            this.hideReminder = !this.hideReminder;
        },
        handleChangeLanguague(locale) {
            this.setLocale(locale.code);
            window.localStorage.setItem('locale', locale.code);
            this.langDir = locale.dir;
        },
        async getUser() {
            await this.authStore.verifyUser();
        },
    },

    async mounted() {
        window.addEventListener('scroll', this.handleSticky);
        await this.getUser();
    },

    updated() {
        console.log(this.langDir);
    },

    components: { CategoryDropdown, MainNav, SidebarCartWidget },
};
</script>


<style>
[dir="rtl"] .header-area {
    direction: rtl;
}

[dir="ltr"] .header-area {
    direction: ltr;
}
</style>