<template>
    <div class="home-slider" :dir="isArabic ? 'rtl' : 'ltr'">
        <swiper :key="currentLang" :modules="modules" :loop="true" :spaceBetween="30"
            :autoplay="{ delay: 4000, disableOnInteraction: true }" :speed="1500" :grabCursor="true"
            :slides-per-view="1">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="slider-content-wrapper">
                    <div class="slider-content-container">
                        <div class="background-image-container">
                            <img :src="slide.image" alt="" />
                        </div>
                        <div class="verse-text-container">
                            <div class="verse-image-container">
                                <img src="/img/home-slider/home-05.png" alt="" />
                            </div>
                            <ul class="text-container">
                                <li class="title">{{ $t(slide.title) }}</li>
                                <li class="subtitle">{{ $t(slide.subtitle) }}</li>
                                <!-- <li class="button"> -->
                                <button class="free-trial-btn edu-btn" style="width: fit-content;">{{
                                    $t(slide.buttonText) }}</button>
                                <!-- </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
    name: 'HomeSlider',
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        currentLang() {
            return this.$i18n.locale;
        },
        isArabic() {
            return this.$i18n.locale === 'ar';
        }
    },
    setup() {
        const slides = [
            {
                id: 'quraan',
                image: '/img/new_cover_quran.png',
                title: 'QuranCourses',
                subtitle: 'HomeSlider2Subtitle',
                buttonText: 'Slide2Button'
            },
            {
                id: 'tjweed',
                image: '/img/new_cover_tajweed.png',
                title: 'TajweedCourses',
                subtitle: 'HomeSlider3Subtitle',
                buttonText: 'Slide3Button'
            },
            {
                id: 'arabic',
                image: '/img/new_cover_arabic.png',
                title: 'QuranCourses',
                subtitle: 'HomeSlider4Subtitle',
                buttonText: 'Slide4Button'
            }
        ];

        return {
            modules: [Autoplay],
            slides,
        };
    }
};
</script>
