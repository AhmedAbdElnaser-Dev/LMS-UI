<template>
  <div class="academic-courses-area p-relative pt-110 pb-120">
    <img class="academic-shape-2" src="/img/shape/acadenic-shape-2.png" alt="shape" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4">
          <div class="section-title mb-50">
            <h2> <span class="down-mark-line-2">Courses</span></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6" v-for="item in courses.slice(0, 3)" :key="item.id">
          <div class="academic-box position-relative mb-30">
            <!-- <img :class="item.shapeClass" src="/img/shape/acadenic-shape-1.png" alt="image not found" /> -->
            <div class="academic-thumb">
              <img :src="item.courseImage" alt="image not found" />
            </div>
            <div class="academic-content">
              <div class="academic-content-header">
                <NuxtLink :to="`/course-details/${item.id}`">
                  <h3>{{ item.title }}</h3>
                </NuxtLink>
              </div>
              <div class="academic-body">
                <div class="academic-tutor d-flex align-items-center">
                  <img :src="item.instructorImage" alt="image not found" />
                  <NuxtLink :to="item.instructorUrl || '/instructor'">{{ item.instructor }}</NuxtLink>
                </div>
                <p>{{ item.shortDesc || item.description }}</p>
              </div>
              <div class="academic-footer">
                <div class="coursee-clock">
                  <i class="flaticon-wall-clock"></i><span>{{ item.year || item.duration }}</span>
                </div>
                <div class="course-creadit">
                  <i class="flaticon-menu-1"></i><span>{{ item.credit }}</span>
                </div>
                <NuxtLink class="edo-course-sec-btn" :to="`/course-details/${item.id}`">{{ item.viewBtn || item.btn }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-3 text-center">
          <div class="academic-bottom-btn">
            <NuxtLink class="edo-theme-btn mt-30" to="/course">View all course</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ar from '@/mixins/data(ar).json';
import en from '@/mixins/data(en).json';

export default {
  name: 'academicCourse',
  data() {
    return {
      courses: []
    };
  },
  computed: {
    currentLang() {
      return this.$i18n.locale;
    }
  },
  watch: {
    currentLang() {
      this.fetchCourses();
    }
  },
  methods: {
    fetchCourses() {
      this.courses = this.currentLang === 'ar' ? ar.courses : en.courses;
    }
  },
  mounted() {
    this.fetchCourses();
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.col-xl-4,
.col-lg-6,
.col-md-6 {
  display: flex;
  flex-direction: column;
}

.academic-box {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
}

.academic-content {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.academic-footer {
  margin-top: auto;
}
</style>
