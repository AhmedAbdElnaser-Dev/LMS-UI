<template>
   <div :class="student_Space ? student_Space : 'student-choose-area fix pt-120 pb-110'">
      <div class="container">
         <div class="row">

            <div class="col-xl-5 col-lg-5">
               <div class="student-choose-wrapper position-relative">
                  <div class="shap-02">
                  </div>
                  <div class="shap-03">
                     <img src="/img/shape/student-shape-03.png" alt="image not found">
                  </div>
                  <div class="shap-04">
                     <img src="/img/shape/student-shape-04.png" alt="image not found">
                  </div>
                  <div class="shap-05">
                     <img src="/img/shape/student-shape-05.png" alt="image not found">
                  </div>
                  <div class="shap-06">
                     <img src="/img/shape/student-shape-06.png" alt="image not found">
                  </div>
                  <div class="shap-07">
                     <img src="/img/shape/student-shape-07.png" alt="image not found">
                  </div>
                  <div class="student-choose-thumb">
                     <img src="/img/home _why students choose us_.png" alt="image not found">
                  </div>
               </div>
            </div>

            <div class="col-xl-2 col-lg-2">
               <div class="student-wrapper position-relative">
                  <div class="shap-01"></div>
               </div>
            </div>

            <div class="col-xl-5 col-lg-5">
               <div class="student-wrapper">
                  <div class="section-title mb-30">
                     <h2>{{ $t("why") }} <span class="down-mark-line">{{ $t("students") }}</span> {{ $t("gainKnowledge")
                        }}</h2>
                  </div>
                  <div class="sitdent-choose-content">
                     <p>
                        - {{ $t("differentiate") }}:
                     </p>
                  </div>
                  <div class="student-choose-list">
                     <ul>
                        <li><i class="fas fa-check-circle"></i>{{ $t("differentiate1") }}</li>
                        <li><i class="fas fa-check-circle"></i>{{ $t("differentiate2") }}</li>
                        <li><i class="fas fa-check-circle"></i>{{ $t("differentiate3") }}</li>
                     </ul>
                  </div>
                  <div class="student-btn">
                     <NuxtLink class="free-trial-btn edu-btn" to="/about">{{ $t("knowMore") }}</NuxtLink>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'student',
   props: {
      student_Space: String
   },
}
</script>