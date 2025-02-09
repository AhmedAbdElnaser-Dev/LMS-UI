<template>
    <div class="student-profile-wishlist">
        <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6" v-for="item in courseItemss.slice(5, 8)" :key="item.id">
                <div class="eduman-course-main-wrapper mb-30">
                    <div class="eduman-course-thumb w-img">
                        <NuxtLink :to="`/course-details/${item.id}`"><img :src="item.courseImage" alt="course-img">
                        </NuxtLink>
                    </div>
                    <div class="course-cart">
                        <div class="course-info-wrapper">
                            <div class="cart-info-body">
                                <span :class="item.badgeClass">
                                    <NuxtLink to="/course">{{ item.badge }}</NuxtLink>
                                </span>
                                <NuxtLink :to="`/course-details/${item.id}`">
                                    <h3>{{ item.title }}</h3>
                                </NuxtLink>
                                <div class="cart-lavel">
                                    <h5>{{ item.level }} <span>{{ item.beginer }}</span></h5>
                                    <p>{{ item.description }}</p>
                                </div>
                                <div class="info-cart-text">
                                    <ul>
                                        <li v-for="itemTwo in item.infoList" :key="itemTwo.infoListTitle"><i
                                                class="far fa-check"></i>{{
                                                    itemTwo.infoListTitle
                                                }}</li>
                                    </ul>
                                </div>
                                <div class="course-action">
                                    <NuxtLink :to="`/course-details/${item.id}`" class="view-details-btn">{{ item.viewBtn }}</NuxtLink>
                                    <NuxtLink to="/cart" class="c-share-btn"><i :class="item.shareIcon"></i></NuxtLink>
                                    <NuxtLink to="/wishlist" class="c-share-btn"><i :class="item.wishIcon"></i></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="eduman-course-wraper">
                        <div class="eduman-course-heading">
                            <NuxtLink :class="item.badgeClass" to="/course">{{ item.badge }}</NuxtLink>
                            <span class="couse-star"><i class="fas fa-star"></i>4.9 (25)</span>
                        </div>
                        <div class="eduman-course-text">
                            <h3>
                                <NuxtLink :to="`/course-details/${item.id}`">{{ item.courseTitle }}
                                </NuxtLink>
                            </h3>
                        </div>
                        <div class="eduman-course-meta">
                            <div class="eduman-course-price">
                                <span class="price-now">{{ item.price }}</span>
                                <del class="price-old">{{ item.priceOld }}</del>
                            </div>
                            <div class="eduman-course-tutor">
                                <NuxtLink to="/instructor"><img :src="item.instructorImage" alt="tutor-img"></NuxtLink>
                                <NuxtLink to="/instructor"><span>{{ item.instructor }}</span></NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="eduman-course-footer">
                        <div class="course-lessson-svg">
                            <i v-html="item.lessonIcon"></i>
                            <span class="ms-2">{{ item.lesson }}</span>
                        </div>
                        <div class="course-deteals-btn">
                            <NuxtLink :to="`/course-details/${item.id}`"><span class="me-2">{{
                                item.viewBtn
                            }}</span><i class="far fa-arrow-right"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import courseItemsMixin from "../../mixins/courseItemsMixin";

export default {
    name: "app",
    mixins: [courseItemsMixin],
};
</script>