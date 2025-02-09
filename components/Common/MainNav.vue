<template>
    <nav id="mobile-menu">
        <ul>
            <li class="menu-item-has-children">
                <NuxtLink :to="localPath('/')">{{ $t("More") }}</NuxtLink>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/">Home 1</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/homeTwo">Home 2</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/homeThree">Home 3</NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="menu-item-has-children">
                <NuxtLink to="/course">{{ $t("Guide") }}</NuxtLink>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/course">Course 1</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course-2">Course 2</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course-3">Course 3</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course-4">Course 4</NuxtLink>
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
            <li class="menu-item-has-children">
                <NuxtLink to="/shop">{{ $t("Courses") }}</NuxtLink>
                <ul class="sub-menu">
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
            <li class="menu-item-has-children"><a href="javascript:void(0)">{{ $t("Sections") }}</a>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li class="menu-item-has-children">
                        <NuxtLink to="/instructor">instructor</NuxtLink>
                        <ul class="sub-menu">
                            <li>
                                <NuxtLink to="/instructor">instructor</NuxtLink>
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
                    <li class="menu-item-has-children">
                        <NuxtLink to="/zoom-class">Zoom Class</NuxtLink>
                        <ul class="sub-menu">
                            <li>
                                <NuxtLink to="/zoom-class">Zoom Class</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/zoom-class-details">Zoom Class
                                    Details</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <NuxtLink to="/blog">Blog</NuxtLink>
                        <ul class="sub-menu">
                            <li>
                                <NuxtLink to="/blog">Blog</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog-details">Blog Details</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <NuxtLink to="/event">Event</NuxtLink>
                        <ul class="sub-menu">
                            <li>
                                <NuxtLink to="/event">Event</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/event-details">Event Details
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/membership">Membership Plan</NuxtLink>
                    </li>
                    <li class="menu-item-has-children">
                        <NuxtLink to="/faq-page">FAQ Page</NuxtLink>
                        <ul class="sub-menu">
                            <li>
                                <NuxtLink to="/faq-page">FAQ Page</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/faq-details">FAQ Details</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/signin">Sign In</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/signup">Sign Up</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/404-page">404 pages</NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
const localPath = useLocalePath()

</script>