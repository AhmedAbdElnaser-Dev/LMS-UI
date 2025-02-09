<script>
import ar from "@/mixins/data(ar).json";
import en from "@/mixins/data(en).json";
export default {
   name: "app",
   data() {
      return {
         courses: [],
      };
   },
   methods: {
      fetchCourseItems() {
         if (this.currentLang === "ar") {
            this.courses = ar.courses;
            console.log("Arabic course items:", ar);
         } else {
            this.courses = en.courses;
            console.log("English course items:", en);
         }
      },
   },
   mounted() {
      this.fetchCourseItems();
   },
   computed: {
      currentLang() {
         return this.$i18n.locale;
      },
   },
   watch: {
      currentLang(newLang, oldLang) {
         console.log("Language changed:", newLang);
         this.fetchCourseItems();
      },
   },
};
</script>



<template>
   <section class="course-area p-relative pt-110 pb-90" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="course-shape-1">
         <img src="/img/shape/portfolio-shap-1.png" alt="shape">
      </div>
      <div class="course-shape-2">
         <img src="/img/shape/portfolio-shap-2.png" alt="shape">
      </div>
      <div class="course-shape-3">
         <img src="/img/shape/portfolio-shap-3.png" alt="shape">
      </div>
      <div class="container">
         <div class="row">
            <div class="col-xl-5 col-lg-5 f-left">
               <div class="section-title mb-50">
                  <h2> {{ $t("Important") }} <span class="down-mark-line">{{
                     $t("Courses") }}</span> <span>{{ $t("CurrentlyAvilable") }} </span> </h2>
               </div>
            </div>
            <div class="col-xl-7 col-lg-7">
               <div class="portfolio-button mt-60">

                  <nav>
                     <div class="nav" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                           data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                           aria-selected="true">{{ $t("ArabicLanguague")
                           }} <span class="port-red">[06]</span></button>
                     </div>
                  </nav>

               </div>
            </div>
         </div>
         <div class="course-main-items">
            <div class="tab-content" id="nav-tabContent">

               <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div class="row">
                     <div class="col-xl-4 col-lg-4 col-md-6" v-for="item in courses" :key="item.id">

                        <div class="eduman-course-main-wrapper mb-30">
                           <div class="eduman-course-thumb w-img">
                              <NuxtLink :to="`/course-details/${item.id}`"><img :src="item.courseImage"
                                    alt="course-img">
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
                                       <p>{{ item.shortDesc }}</p>
                                    </div>
                                    <div class="info-cart-text">
                                       <ul>
                                          <li v-for="itemTwo in item.infoList" :key="itemTwo.infoListTitle"><i
                                                class="far fa-check"></i>{{ itemTwo.infoListTitle }}</li>
                                       </ul>
                                    </div>
                                    <div class="course-action">
                                       <NuxtLink :to="`/course-details/${item.id}`" class="view-details-btn">{{
                                          item.viewBtn }}</NuxtLink>
                                       <NuxtLink to="/cart" class="c-share-btn"><i :class="item.shareIcon"></i>
                                       </NuxtLink>
                                       <NuxtLink to="/wishlist" class="c-share-btn"><i :class="item.wishIcon"></i>
                                       </NuxtLink>
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
                                    <NuxtLink :to="`/course-details/${item.id}`">{{ item.courseTitle }}</NuxtLink>
                                 </h3>
                              </div>
                              <div class="eduman-course-meta">
                                 <div class="eduman-course-price">
                                    <span class="price-now">{{ item.price }}</span>
                                    <del class="price-old">{{ item.priceOld }}</del>
                                 </div>
                                 <div class="eduman-course-tutor">
                                    <NuxtLink to="/instructor"><img :src="item.instructorImage" alt="tutor-img">
                                    </NuxtLink>
                                    <NuxtLink to="/instructor"><span>{{ item.instructor }}</span></NuxtLink>
                                 </div>
                              </div>
                           </div>
                           <div class="eduman-course-footer">
                              <div class="course-lessson-svg">
                                 <i v-html="item.lessonIcon"></i>
                                 <span class="ms-2">{{ item.duration }}</span>
                              </div>
                              <div class="course-deteals-btn">
                                 <NuxtLink :to="`/course-details/${item.id}`"><span class="me-2">{{ item.viewBtn
                                       }}</span><i class="far fa-arrow-right"></i></NuxtLink>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   </section>
</template>