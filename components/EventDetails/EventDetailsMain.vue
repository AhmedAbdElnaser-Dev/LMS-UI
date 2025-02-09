<script>
import FooterOne from "../Common/FooterOne.vue";
import PageTitle from "../Common/PageTitle.vue";
import HeaderFour from "../Common/HeaderFour.vue";
import ScrollToTop from "../Common/ScrollToTop.vue";

export default {
   name: "app",
   components: {
    FooterOne,
    PageTitle,
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

      <!-- PageTitle-area-end -->
      <PageTitle pageTitle="Event Details" pageSubTitle="Checkout" />
      <!-- PageTitle-area-end -->

      <div class="event-detalis-area pt-120 pb-90">
         <div class="container">
            <div class="row">
               <div class="col-xl-8 col-lg-12">
                  <div class="event-main-wrapper mb-30">
                     <div class="course-detelis-meta mb-30">
                        <div class="course-meta-wrapper border-line-meta">
                           <div class="course-meta-img">
                              <NuxtLink to="/instructor-profile"><img src="/img/course/course-meta.png"
                                    alt="course-meta"></NuxtLink>
                           </div>
                           <div class="course-meta-text">
                              <span>Hosted by</span>
                              <h6>
                                 <NuxtLink to="/instructor-profile">David Allberto</NuxtLink>
                              </h6>
                           </div>
                        </div>
                        <div class="course-Enroll border-line-meta">
                           <p>Total Joined</p>
                           <span>25 Audiences</span>
                        </div>
                        <div class="course-update border-line-meta">
                           <p>Estimated Seat</p>
                           <span>240 Seats</span>
                        </div>
                        <div class="course-category">
                           <p>Category</p>
                           <span>
                              <NuxtLink to="/event">Business Management</NuxtLink>
                           </span>
                        </div>
                     </div>
                     <div class="event-details-thumb w-img mb-20">
                        <img src="/img/event/event-details-img.jpg" alt="event-img">
                     </div>
                     <div class="event-contact-info">
                        <h2>General Ideas of Land Management System</h2>
                     </div>
                     <div class="event-introduction">
                        <div class="introduction-info mb-40">
                           <h4>Introduction :</h4>
                           <p>There are so many websites out there that have not considered the overall usability of
                              their visually impaired users. When it comes to designing better links and sending better
                              emails, Slava Shestopalov has a few tips on how to improve your website’s experience while
                              accessibility in mind. The participants will get general ideas of the land management
                              system of business.</p>
                           <p>Everyone must work, but for many of us that job isn’t just a paycheck, it’s an opportunity
                              to express ourselves and make something better. Entrepreneurs and go-getters often feel as
                              if they carry the weight of an entire organization on their backs, and therefore could
                              always use a little extra motivation.</p>
                        </div>
                     </div>
                     <div class="even-point-tittle">
                        <h4>Points of Speaking</h4>
                     </div>
                     <div class="event-point-info">
                        <ul>
                           <li>HR Audit: Concept</li>
                           <li>Objectives & Purpose of HR Audit</li>
                           <li>Principles of Effective HR Auditing</li>
                           <li>Knowledge, Skills & Attitude of an HR Auditor</li>
                           <li>Tasks of an HR Auditor</li>
                           <li>Types of HR Audit</li>
                        </ul>
                     </div>
                     <div class="google-map-area event-map pt-45">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25621.6685132309!2d-73.76450733964063!3d40.741031946556575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1646544624845!5m2!1sen!2sbd"></iframe>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-8 col-md-8">
                  <div class="sidebar-widget-wrapper">
                     <div class="event-speaker-wrapper mb-30">
                        <div class="event-speaker-info">
                           <h4>Speaker</h4>
                        </div>
                        <div class="event-sidebar-thumb w-img">
                           <a href="#"><img src="/img/event/speaker.png" alt="Speaker"></a>
                        </div>
                        <div class="event-speaker-content text-center">
                           <span><a href="#">Crish Denial</a></span>
                           <p>Motivational Speaker</p>
                        </div>
                     </div>
                     <div class="event-information-wrapper mb-30">
                        <div class="event-price-info">
                           <div class="event-ticket-cost">
                              <span>Ticket Costs:</span>
                           </div>
                           <div class="event-price">
                              <span>$24.00</span>
                              <div class="old-price">
                                 <del>$48.00</del>
                              </div>
                           </div>
                        </div>
                        <div class="event-information-list">
                           <ul>
                              <li>
                                 <div class="information-list">
                                    <i class="flaticon-calendar"></i>
                                    <span>Date</span>
                                 </div>
                                 <div class="information-list">
                                    <span>10 Jan 2022</span>
                                 </div>
                              </li>
                              <li>
                                 <div class="information-list">
                                    <i class="flaticon-clock"></i>
                                    <span>Schedule</span>
                                 </div>
                                 <div class="information-list">
                                    <span>10 AM - 12 PM</span>
                                 </div>
                              </li>
                              <li>
                                 <div class="information-list">
                                    <i class="flaticon-place"></i>
                                    <span>Location</span>
                                 </div>
                                 <div class="information-list">
                                    <span>New York, TX 82760, US</span>
                                 </div>
                              </li>
                              <li>
                                 <div class="information-list">
                                    <i class="flaticon-menu-2"></i>
                                    <span>Category</span>
                                 </div>
                                 <div class="information-list">
                                    <span>Business</span>
                                 </div>
                              </li>
                              <li>
                                 <div class="information-list">
                                    <i class="flaticon-global"></i>
                                    <span>Laguage</span>
                                 </div>
                                 <div class="information-list">
                                    <span>English</span>
                                 </div>
                              </li>
                              <li>
                                 <div class="information-list">
                                    <i class="flaticon-bookmark-white"></i>
                                    <span>Estimated Seat</span>
                                 </div>
                                 <div class="information-list">
                                    <span>470 Seats</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <NuxtLink to="/contact" class="event-btn">Join this Event</NuxtLink>
                     </div>

                     <div class="event-sponsor-wrapper mb-30">
                        <div class="sopnsor-tittle">
                           <h4>Sponsor by</h4>
                        </div>
                        <div class="sponsor-thumb">
                           <a href="#"> <img src="/img/logo/sopnsor-logo-1.png" alt="sponsor-logo"></a>
                           <a href="#"> <img src="/img/logo/sopnsor-logo-2.png" alt="sponsor-logo"></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

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