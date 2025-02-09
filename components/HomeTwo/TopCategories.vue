<template>
    <div class="categories-area grey-2 pt-110 pb-90 position-relative">
        <div class="category-shap-02">
            <img src="/img/shape/categorey-shap-02.png" alt="image not found">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-20">
                    <div class="section-title mb-30">
                        <h2>Top <span class="down-mark-line-2">Categories</span></h2>
                    </div>
                </div>
                <div>
                    <div class="category-main-wrapper position-relative">
                        <div class="category-shap-01">
                            <img src="/img/shape/categorey-shap-01.png" alt="image not found">
                        </div>
                        <div>
                            <div class="category-slide-wrapper position-relative">
                                <div class="category-active">
                                    <swiper 
                                        :modules="modules"
                                        :loop="true"
                                        :spaceBetween="15" 
                                        :autoplay="{
                                            delay: 3500,
                                            disableOnInteraction: true,
                                        }" 
                                        :navigation="{
                                            clickable: true,
                                            nextEl: '.category-button-next',
                                            prevEl: '.category-button-prev',
                                        }" 
                                        :speed="1500" 
                                        :grabCursor="true" 
                                        :breakpoints="{
                                            '320': {
                                                slidesPerView: 1,
                                                spaceBetween: 15,
                                            },
                                            '480': {
                                                slidesPerView: 1,
                                                spaceBetween: 15,
                                            },
                                            '640': {
                                                slidesPerView: 2,
                                                spaceBetween: 15,
                                            },
                                            '991': {
                                                slidesPerView: 3,
                                                spaceBetween: 15,
                                            },
                                            '1200': {
                                                slidesPerView: 3,
                                                spaceBetween: 15,
                                            },
                                            '1400': {
                                                slidesPerView: 5,
                                            },
                                        }">
                                        <swiper-slide v-for="item in catImageList" :key="item.id">
                                            <NuxtLink to="/course">
                                                <div class="categories-wrapper text-center mb-30">
                                                    <div class="categiories-thumb">
                                                        <img :src="item.catImage" alt="img not found">
                                                    </div>
                                                    <div class="categories-content">
                                                        <h4>{{ item.catTitle }}</h4>
                                                        <p>{{ item.catDesc }}</p>
                                                    </div>
                                                </div>
                                            </NuxtLink>
                                        </swiper-slide>
                                    </swiper>

                                    <!-- If we need navigation buttons -->
                                    <div class="category-nav">
                                        <div class="category-button-prev"><i class="far fa-long-arrow-left"></i></div>
                                        <div class="category-button-next"><i class="far fa-long-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
    name: 'topCategories',
    data() {
        return {
            catImageList: [{
                id: '1',
                catImage: '/img/icon/categiories-thumb-1.png',
                catTitle: 'Business',
                catDesc: '13 Course available'
            },
            {
                id: '2',
                catImage: '/img/icon/categiories-thumb-2.png',
                catTitle: 'Development',
                catDesc: '22 Course available'
            },
            {
                id: '3',
                catImage: '/img/icon/categiories-thumb-3.png',
                catTitle: 'Data Science',
                catDesc: '08 Course available'
            }
                , {
                id: '4',
                catImage: '/img/icon/categiories-thumb-4.png',
                catTitle: 'Photography',
                catDesc: '22 Course available'
            },
            {
                id: '5',
                catImage: '/img/icon/categiories-thumb-5.png',
                catTitle: 'Marketing',
                catDesc: '16 Course available'
            },
            {
                id: '6',
                catImage: '/img/icon/categiories-thumb-1.png',
                catTitle: 'Consulting',
                catDesc: '13 Course available'
            }],
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay, Navigation],
        }
    }
}
</script>

