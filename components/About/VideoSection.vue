<template>
   <div>
      <div class="features-video-area">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-10 col-md-9">
                  <div>
                     <div class="features-video-wrapper">
                        <div class="features-shape-wrapper-1">
                           <img class="features-shape" src="/img/shape/features-shape.png" alt="features-shape">
                           Get <span>help</span> from <br> this video

                        </div>
                        <div class="features-shape-werapper-2">
                           <span>65k+</span> <br>views daily
                           <img class="features-shape-2" src="/img/shape/features-shape-2.png" alt="features-shape-2">
                        </div>
                        <div class="reatures-video-thumb">
                           <img src="/img/features/features.jpg" alt="features-img">
                        </div>
                        <div class="features-video-content">
                           <div class="features-btn">
                              <span class="popup-video" @click.prevent="handleVideoPopup"><i
                                    class="fas fa-play"></i></span>
                           </div>
                           <div class="video-btn-text">
                              <span>Watch Video
                                 <br>Intro</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- video modal start -->
         <video-modal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />
         <!-- video modal end -->
      </div>
   </div>
</template>
<script>
import VideoModal from "../Common/VideoModal.vue"

export default {
   name: "app",
   components: {
      VideoModal
   },
   methods: {
      handleVideoPopup() {
         this.$refs.video_modal.playVideo();
      },
   }
};
</script>