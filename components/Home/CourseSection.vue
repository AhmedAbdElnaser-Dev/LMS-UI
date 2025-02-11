<script>
import ar from "@/mixins/data(ar).json";
import en from "@/mixins/data(en).json";

export default {
   name: "app",
   data() {
      return {
         courses: [],
         selectedCategory: "All",
         showAllCourses: false, // Controls "See More" for courses
         expandedInfo: {}, // Tracks which course info is expanded
      };
   },
   methods: {
      fetchCourseItems() {
         if (this.currentLang === "ar") {
            this.courses = ar.courses;
         } else {
            this.courses = en.courses;
         }
      },
      setCategory(category) {
         this.selectedCategory = category;
         this.showAllCourses = false; // Reset to 5 courses when switching category
      },
      toggleCourses() {
         this.showAllCourses = !this.showAllCourses;
      },
      toggleInfo(courseId) {
         this.$set(this.expandedInfo, courseId, !this.expandedInfo[courseId]);
      },
   },
   computed: {
      currentLang() {
         return this.$i18n.locale;
      },
      filteredCourses() {
         let filtered = this.selectedCategory === "All"
            ? this.courses
            : this.courses.filter(course => course.category.includes(this.selectedCategory));

         return this.showAllCourses ? filtered : filtered.slice(0, 5);
      },
   },
   watch: {
      currentLang() {
         this.fetchCourseItems();
      },
   },
   mounted() {
      this.fetchCourseItems();
   },
};
</script>

<template>
   <section class="course-area p-relative pt-110 pb-90" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="container">
         <div class="row">
            <div class="col-xl-5 col-lg-5">
               <div class="section-title mb-50">
                  <h2> {{ $t("Important") }} <span class="down-mark-line">{{ $t("Courses") }}</span> <span>{{
                     $t("CurrentlyAvilable") }} </span> </h2>
               </div>
            </div>
            <div class="col-xl-7 col-lg-7">
               <div class="portfolio-button mt-60">
                  <nav>
                     <div class="nav">
                        <button class="nav-link" :class="{ active: selectedCategory === 'All' }"
                           @click="setCategory('All')">
                           {{ $t("All") }} <span class="port-red">[{{ courses.length }}]</span>
                        </button>
                        <button class="nav-link" :class="{ active: selectedCategory === 'Quraan' }"
                           @click="setCategory('Quraan')">
                           {{ $t("Quraan") }} <span class="port-red">[{{ courses.filter(c =>
                              c.category.includes('Quraan')).length }}]</span>
                        </button>
                        <button class="nav-link" :class="{ active: selectedCategory === 'Tajweed' }"
                           @click="setCategory('Tajweed')">
                           {{ $t("Tajweed") }} <span class="port-red">[{{ courses.filter(c =>
                              c.category.includes('Tajweed')).length }}]</span>
                        </button>
                        <button class="nav-link" :class="{ active: selectedCategory === 'Arabic' }"
                           @click="setCategory('Arabic')">
                           {{ $t("Arabic") }} <span class="port-red">[{{ courses.filter(c =>
                              c.category.includes('Arabic')).length }}]</span>
                        </button>
                     </div>
                  </nav>
               </div>
            </div>
         </div>

         <div class="course-main-items">
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-6" v-for="item in filteredCourses" :key="item.id">
                  <div class="eduman-course-main-wrapper mb-30">
                     <div class="eduman-course-thumb w-img">
                        <NuxtLink :to="`/course-details/${item.id}`"><img :src="item.courseImage" alt="course-img">
                        </NuxtLink>
                     </div>

                     <div class="course-cart">
                        <div class="course-info-wrapper">
                           <div class="cart-info-body">
                              <span :class="item.badgeClass">
                                 <NuxtLink to="/course">{{ item.category.join(", ") }}</NuxtLink>
                              </span>
                              <NuxtLink :to="`/course-details/${item.id}`">
                                 <h3>{{ item.title }}</h3>
                              </NuxtLink>
                              <div class="cart-lavel">
                                 <h5>{{ item.level }} <span>{{ item.beginer }}</span></h5>
                                 <p>{{ item.shortDesc }}</p>
                              </div>

                              <!-- INFO LIST WITH TOGGLE -->
                              <!-- <div class="info-cart-text">
                                 <ul>
                                    <li v-for="(itemTwo, index) in item.infoList.slice(0, expandedInfo[item.id] ? item.infoList.length : 3)"
                                       :key="itemTwo.infoListTitle">
                                       <i class="far fa-check"></i>{{ itemTwo.infoListTitle }}
                                    </li>
                                 </ul>
                              </div> -->

                              <div class="course-action">
                                 <NuxtLink :to="`/course-details/${item.id}`" class="view-details-btn">{{ item.viewBtn
                                    }}</NuxtLink>
                                 <NuxtLink to="/cart" class="c-share-btn"><i :class="item.shareIcon"></i></NuxtLink>
                                 <NuxtLink to="/wishlist" class="c-share-btn"><i :class="item.wishIcon"></i></NuxtLink>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="eduman-course-wraper">
                        <div class="eduman-course-heading">
                           <NuxtLink :class="item.badgeClass" to="/course">{{ item.category.join(", ") }}</NuxtLink>
                           <span class="couse-star"><i class="fas fa-star"></i>4.9 (25)</span>
                        </div>
                        <div class="eduman-course-text">
                           <h3>
                              <NuxtLink :to="`/course-details/${item.id}`">{{ item.courseTitle }}</NuxtLink>
                           </h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- SEE MORE / SHOW LESS BUTTON -->
            <div class="text-center mt-4">
               <button v-if="filteredCourses.length >= 5" @click="toggleCourses" class="view-details-btn">
                  {{ showAllCourses ? $t("ShowLess") : $t("SeeMore") }}
               </button>
            </div>
         </div>
      </div>
   </section>
</template>
