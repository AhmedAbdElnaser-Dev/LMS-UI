<script>
import FooterOne from "../Common/FooterOne.vue";
import PageTitle from "../Common/PageTitle.vue";
import Pagination from "../Common/Pagination.vue";
import CourseBar from "./CourseBar.vue";
import ShopSidebar from "../Shop/ShopSidebar.vue";
import courseItemsMixin from "../../mixins/courseItemsMixin";
import instructorProfilesMixin from "~~/mixins/instructorProfilesMixin";
import HeaderFour from "../Common/HeaderFour.vue";
import ScrollToTop from "../Common/ScrollToTop.vue";

export default {
   name: "app",
   mixins: [
      courseItemsMixin,
      instructorProfilesMixin
   ],
   components: {
    FooterOne,
    PageTitle,
    CourseBar,
    Pagination,
    ShopSidebar,
    HeaderFour,
    ScrollToTop
}
};
</script>


<template>
   <div>
      <!-- header-area-start -->
      <HeaderFour />
      <!-- header-area-end -->

      <!-- PageTitle-area-start -->
      <PageTitle pageTitle="Courses" pageSubTitle="Courses" />
      <!-- PageTitle-area-end -->

      <!-- course-bar-area-start -->
      <CourseBar />
      <!-- course-bar-area-end -->

      <!-- course-area-start -->
      <section class="course-content-area pb-90">
         <div class="container">
            <div class="row mb-10">
               <div class="col-xl-3 col-lg-4 col-md-8">
                  <ShopSidebar />
               </div>
               <div class="col-xl-9 col-lg-8 col-md-12">
                  <div class="row pb-25">
                     <div class="col-xl-4 col-lg-6 col-md-6" v-for="item in courseItemss" :key="item.id">
                        <div class="course-wrapper-2 mb-30">
                           <div class="student-course-img">
                              <img :src="item.courseImage" alt="courde-img">
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
                                                class="far fa-check"></i>{{ itemTwo.infoListTitle }}</li>
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
                           <div class="student-course-footer">
                              <div class="student-course-linkter">
                                 <div class="course-lessons">
                                    <i v-html="item.lessonIcon"></i>
                                    <span class="ms-2">{{ item.lesson }}</span>
                                 </div>
                                 <div class="portfolio-price">
                                    <span>{{ item.price }}</span>
                                    <del>{{ item.priceOld }}</del>
                                 </div>
                              </div>
                              <div class="student-course-text">
                                 <h3>
                                    <NuxtLink :to="`/course-details/${item.id}`">{{ item.courseTitle }}</NuxtLink>
                                 </h3>
                              </div>
                              <div class="portfolio-user">
                                 <div class="user-icon">
                                    <NuxtLink to="/instructor"><i class="fas fa-user"></i>{{ item.instructor }}
                                    </NuxtLink>
                                 </div>
                                 <div class="course-icon">
                                    <i :class="item.productRating1"></i>
                                    <i :class="item.productRating2"></i>
                                    <i :class="item.productRating3"></i>
                                    <i :class="item.productRating4"></i>
                                    <i :class="item.productRating5"></i>
                                    <span>{{ item.rating }}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <Pagination />
               </div>
            </div>
         </div>
      </section>
      <!-- course-area-end -->

      <!-- Footer-area-start -->
      <FooterOne />
      <!-- Footer-area-end -->

      <!-- scrolltop-area-start -->
      <ScrollToTop />
      <!-- scrolltop-area-end -->

   </div>

</template>

<style scoped>
</style>