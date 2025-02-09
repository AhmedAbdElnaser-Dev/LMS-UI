<template>
  <div>
  <!-- related_product-start -->
  <div class="related_product pb-65">
    <div class="container custome-container">
      <div class="section-title mb-55">
        <h2>Related Product</h2>
      </div>
      <div class="r-product-active">
          <swiper 
            :modules="modules"
            :loop="true"
            :spaceBetween="30" 
            :autoplay="{
                delay: 3500,
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
                slidesPerView: 2,
                spaceBetween: 40
              },
              '991': {
                slidesPerView: 3,
                spaceBetween: 40
              },
              '1200': {
                slidesPerView: 4,
                spaceBetween: 40
              },
              '1400': {
                slidesPerView: 5,
                spaceBetween: 40
              }
            }">
            <swiper-slide v-for="item in productItemss.slice(0, 7)" :key="item.id">
              <div class="product-items text-center">
                <div class="product-img">
                  <NuxtLink :to="`/shop-details/${item.id}`"><img :src="item.productImage" alt="product-img">
                  </NuxtLink>
                  <div class="shop-quick-view">
                      <ul>
                          <li>
                              <NuxtLink to="/cart"><i class="fal fa-cart-arrow-down"></i></NuxtLink>
                          </li>
                          <li>
                              <button type="button" data-bs-toggle="modal" data-bs-target="#productModalId"><i class="fal fa-eye"></i></button>
                          </li>
                          <li>
                              <NuxtLink to="/wishlist"><i class="fal fa-heart"></i></NuxtLink>
                          </li>
                      </ul>
                    </div>
                </div>
                <div class="product-content">
                  <h4>
                    <NuxtLink :to="`/shop-details/${item.id}`">{{ item.productTitle }}</NuxtLink>
                  </h4>
                  <span>{{ item.productPrice }}</span>
                  <del :class="item.productOldPriceClass">{{ item.productOldPrice }}</del>
                  <div class="course-icon">
                    <i :class="item.productRating1"></i>
                    <i :class="item.productRating2"></i>
                    <i :class="item.productRating3"></i>
                    <i :class="item.productRating4"></i>
                    <i :class="item.productRating5"></i>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
      </div>
    </div>
  </div>
  <!-- related_product-end -->

  <!-- footer-area-end -->
  <ProductPopup />
  <!-- footer-area-end -->
</div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";
import productItemsMixin from '~~/mixins/productItemsMixin'
import ProductPopup from '../Shop/ProductPopup.vue';

export default {
  name: 'relatedProduct',
  mixins: [productItemsMixin],
  components: {
    Swiper,
    SwiperSlide,
    ProductPopup
},
  setup() {
    return {
      modules: [Autoplay],
    }
  }
}
</script>

