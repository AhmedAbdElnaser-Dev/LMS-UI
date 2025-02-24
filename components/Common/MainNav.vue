<template>
    <nav id="mobile-menu">
        <ul>
            <li class="menu-item">
                <NuxtLink to="/about">{{ $t("About") }}</NuxtLink>
            </li>
            <li class="menu-item">
                <NuxtLink to="/shop">{{ $t("Courses") }}</NuxtLink>
            </li>
            <li class="menu-item">
                <NuxtLink to="/faq-page">{{ $t("FAQs") }}</NuxtLink>
            </li>
            <li class="menu-item">
                <NuxtLink to="/event">{{ $t("Events") }}</NuxtLink>
            </li>
            <!-- <li class="menu-item-has-children"><a href="javascript:void(0)">{{ $t("Sections") }}</a>
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
            </li> -->
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>