<template>
    <nav id="mobile-menu">
        <ul>
            <li class="menu-item">
                <NuxtLink to="/about">{{ $t("About") }}</NuxtLink>
            </li>

            <li class="menu-item-has-children">
                <a href="javascript:void(0)">{{ $t("Courses") }}</a>
                <ul class="sub-menu">
                    <template v-for="section in courses">
                        <li v-if="section.departments" class="menu-item-has-children" :key="section.id">
                            <a href="javascript:void(0)">{{ section[currentLocale] }}</a>
                            <ul class="sub-menu">
                                <template v-for="dept in section.departments">
                                    <li v-if="dept.courses" class="menu-item-has-children" :key="dept.id">
                                        <a href="javascript:void(0)">{{ dept[currentLocale] }}</a>
                                        <ul class="sub-menu">
                                            <li v-for="course in dept.courses" :key="course.id">
                                                <NuxtLink :to="'/shop?course=' + slugify(course[currentLocale])">{{
                                                    course[currentLocale] }}</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </template>
                            </ul>
                        </li>
                        <li v-if="section.courses" class="menu-item-has-children"
                            :key="'section-courses-' + section.id">
                            <a href="javascript:void(0)">{{ section[currentLocale] }}</a>
                            <ul class="sub-menu">
                                <li v-for="course in section.courses" :key="course.id">
                                    <NuxtLink :to="'/shop?course=' + slugify(course[currentLocale])">{{
                                        course[currentLocale] }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </template>
                </ul>
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

<script>
// import departmentsData from '@/mixins/departments.json';
import { useI18n } from 'vue-i18n';
import courses from "@/mixins/courses.json"

export default {
    name: 'MainNav',
    data() {
        return {
            // showDepartments: false,
            // hoveredDept: null,
            // departments: departmentsData.departments,
            courses,
        };
    },
    computed: {
        currentLocale() {
            return this.$i18n.locale;
        }
    },
    methods: {
        slugify(text) {
            return text
                .toString()
                .normalize('NFD')
                .replace(/\p{Diacritic}/gu, '')
                .replace(/[^\w\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .toLowerCase();
        }
    }
};
</script>

<style scoped lang="scss">
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>