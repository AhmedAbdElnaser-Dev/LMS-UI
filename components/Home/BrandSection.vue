<template>
   <div class="brand-area theme-bg pt-90 pb-120">
      <div class="container">
         <div class="row">
            <div class="col-xl-12">
               <div class="brand-wrapper text-center">
                  <div class="brand-active">
                     <swiper 
                        :modules="modules"
                        :loop="true"
                        :spaceBetween="30" 
                        :autoplay="{
                           delay: 2500,
                           disableOnInteraction: true,
                        }" 
                        :speed="1500" 
                        :grabCursor="true"  
                        :breakpoints="{
                           '320': {
                              slidesPerView: 1,
                              spaceBetween: 20
                           },
                           '480': {
                              slidesPerView: 2,
                              spaceBetween: 30
                           },
                           '640': {
                              slidesPerView: 3,
                              spaceBetween: 40
                           },
                           '991': {
                              slidesPerView: 4,
                              spaceBetween: 40
                           },
                           '1200': {
                              slidesPerView: 5,
                              spaceBetween: 40
                           },
                           '1400': {
                              slidesPerView: 6,
                              spaceBetween: 40
                           }
                        }">
                        <swiper-slide v-for="item in brandImageList" :key="item.brandImage">
                           <div class="singel-brand">
                              <img :src="item.brandImage" alt="image not found">
                           </div>
                        </swiper-slide>
                     </swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
   name: 'brand',
   data() {
      return {
         brandImageList: [{
            id: '1',
            brandImage: '/img/brand/brand-01.png'
         },
         {
            id: '2',
            brandImage: '/img/brand/brand-02.png'
         },
         {
            id: '3',
            brandImage: '/img/brand/brand-03.png'
         },
         {
            id: '4',
            brandImage: '/img/brand/brand-04.png'
         },
         {
            id: '5',
            brandImage: '/img/brand/brand-05.png'
         },
         {
            id: '6',
            brandImage: '/img/brand/brand-06.png'
         },
         {
            id: '7',
            brandImage: '/img/brand/brand-01.png'
         },
         ],
      }
   },
   components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay],
        }
    }
}
</script>


