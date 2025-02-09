<template>
    <div class="home-slider">
        <swiper :modules="modules" :loop="true" :spaceBetween="30" :autoplay="{
            delay: 10000,
            disableOnInteraction: true,
        }" :speed="1500" :grabCursor="true" :slides-per-view="1">
            <swiper-slide v-for="item in productItemss.slice(0, 7)" :key="item.id">
                <!-- <div class="product-items text-center">
                    <div class="product-img">
                        <NuxtLink :to="`/shop-details/${item.id}`"><img :src="item.productImage" alt="product-img">
                        </NuxtLink>
                    </div>
                </div> -->
                <div class="slider-content-wrapper">
                    <div class="slider-content-container">

                        <div class="background-image-container">
                            <img src="/img/home-slider/covers-01.png" alt="">
                        </div>
                        <div class="verse-text-container">
                            <div class="verse-image-container">
                                <img src="/img/home-slider/home-05.png" alt="">

                            </div>
                            <ul class="text-container">
                                <li class="title">{{ $t("QuranCourses") }}</li>
                                <li class="content">{{ $t("HomeSlider1Text") }}</li>
                                <li class="button">
                                    <button class="free-trial-btn edu-btn">{{ $t("Slide1Button") }}</button>
                                </li>
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
import productItemsMixin from '~~/mixins/productItemsMixin'

export default {
    name: 'relatedProduct',
    mixins: [productItemsMixin],
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay],
        }
    }
}
</script>
