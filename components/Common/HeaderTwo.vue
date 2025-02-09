<template>
    <div>
        <!-- header-area-start  -->
        <header>
            <div class="header-top-area d-none d-lg-block">
                <div class="container-fluid">
                    <div class="header-top-inner">
                        <div class="row align-items-center">
                            <div class="col-xl-8 col-lg-8">
                                <div class="header-top-icon">
                                    <a href="tel:(555)674890556"><i class="fas fa-phone-alt"></i>(555) 674 890 556</a>
                                    <a href="mailto:info@example.com"><i class="fal fa-envelope"></i>info@example.com</a>
                                    <i class="fal fa-map-marker-alt"></i><span>3rd Avenue, San Francisco</span>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="header-top-login d-flex f-right">
                                    <div class="header-social">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="`${isSticky ? 'header-area-2 sticky-header sticky' : 'header-area-2 sticky-header'}`">
                <div class="container-fluid">
                    <div class="header-main-wrapper">
                        <div class="row align-items-center">
                            <div class="col-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <div class="header-logo">
                                    <NuxtLink to="/"><img src="/img/logo/logo-black.png" alt="logo"></NuxtLink>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                <div class="header-main-right  d-flex justify-content-end">
                                    <div class="main-menu main-menu-side-change mr-30 d-none d-xl-block">
                                        <MainNav />
                                    </div>
                                    <div class="header-btn">
                                        <div class="cart-wrapper mr-45">
                                            <a href="javascript:void(0)" class="cart-toggle-btn" @click="handleCart">
                                                <div class="header__cart-icon p-relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.988" height="19.988"
                                                        viewBox="0 0 19.988 19.988">
                                                        <g id="trolley-cart" transform="translate(-1 -1)">
                                                            <path id="Path_36" data-name="Path 36"
                                                                d="M1.666,2.333H3.8L6.159,12.344a1.993,1.993,0,0,0,.171,3.98H17.656a.666.666,0,1,0,0-1.333H6.33a.666.666,0,0,1,0-1.333H17.578a1.992,1.992,0,0,0,1.945-1.541l1.412-6a2,2,0,0,0-1.946-2.456H5.486L4.98,1.514A.666.666,0,0,0,4.331,1H1.666a.666.666,0,0,0,0,1.333ZM18.989,5a.677.677,0,0,1,.649.819l-1.412,6a.662.662,0,0,1-.648.514H7.524L5.8,5Z"
                                                                transform="translate(0 0)" fill="#141517" />
                                                            <path id="Path_37" data-name="Path 37"
                                                                d="M20,27a2,2,0,1,0,2-2A2,2,0,0,0,20,27Zm2.665,0A.666.666,0,1,1,22,26.333.666.666,0,0,1,22.665,27Z"
                                                                transform="translate(-6.341 -8.01)" fill="#141517" />
                                                            <path id="Path_38" data-name="Path 38"
                                                                d="M9,27a2,2,0,1,0,2-2A2,2,0,0,0,9,27Zm2.665,0A.666.666,0,1,1,11,26.333.666.666,0,0,1,11.665,27Z"
                                                                transform="translate(-2.67 -8.01)" fill="#141517" />
                                                        </g>
                                                    </svg>
                                                    <span class="item-number">3</span>
                                                </div>
                                            </a>
                                        </div>
                                        <NuxtLink to="/signup" class="edu-four-btn d-none d-lg-block">Enroll now</NuxtLink>
                                        <div class="menu-bar ml-20">
                                            <a class="side-toggle header-2" href="javascript:void(0)"
                                                @click="handleSidebar">
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
        <div :class="`${showSidebar ? 'offcanvas-overlay overlay-open' : 'offcanvas-overlay'}`" @click="handleSidebarClose">
        </div>
        <!-- Mobile Menu End -->

        <!-- cart mini area start -->
        <div class="cartmini__area">
            <div :class="`${showCart ? 'cartmini__wrapper opened' : 'cartmini__wrapper'}`">
                <div class="cartmini__title">
                    <h4>Shopping cart</h4>
                </div>
                <div class="cartmini__close">
                    <button type="button" class="cartmini__close-btn" @click="handleCart"><i
                            class="fal fa-times"></i></button>
                </div>
                <SidebarCartWidget />
            </div>
        </div>
        <div :class="`${showCart ? 'body-overlay opened' : 'body-overlay'}`" @click="handleCart"></div>
        <!-- cart mini area end -->

    </div>
</template>

<script>
import MainNav from './MainNav.vue';
import SidebarCartWidget from './SidebarCartWidget.vue';

export default {
    name: "app",
    data() {
        return {
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
            if (window.scrollY > 50) {
                this.isSticky = true;
            }
            else {
                this.isSticky = false;
            }
        },
        handleSidebar() {
            this.showSidebar = true;
        },
        handleSidebarClose() {
            this.showSidebar = false;
        },
        handleCart() {
            return this.showCart = !this.showCart;
        },
        handleReminder() {
            return this.hideReminder = !this.hideReminder;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleSticky);
    },
    components: { MainNav, SidebarCartWidget }
};
</script>