<script>
import blogItemsMixin from '../../mixins/blogItemsMixin';
import FooterOne from '~~/components/Common/FooterOne.vue';
import HeaderFour from '~~/components/Common/HeaderFour.vue';

export default {
   name: "App",
   mixins: [blogItemsMixin],
   data() {
      return {
         id: this.$route.params.id,
         blogItems: {},
      };
   },
   methods: {
      getblogItems(blogItemsId) {
         this.blogItems = this.blogItemss.find((item) => item.id == blogItemsId);
      },
   },
   created() {
      this.getblogItems(this.id);
   },
   components: { FooterOne, HeaderFour }
};
</script>

<template>
   <div>

      <!-- header-area-start -->
      <HeaderFour />
      <!-- header-area-end -->

      <!-- hero-area-start -->
      <div class="hero-arera course-item-height" :style="{ backgroundImage: `url(/img/slider/course-slider.jpg)` }">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="hero-course-1-text">
                     <h2>{{ blogItems.blogTitle }}</h2>
                  </div>
                  <div class="course-title-breadcrumb">
                     <nav>
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item">
                              <NuxtLink to="/">Home</NuxtLink>
                           </li>
                           <li class="breadcrumb-item"><span>{{ blogItems.blogTitle }}</span></li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- hero-area-end -->

      <div class="blog-area pt-120 pb-90">
         <div class="container">
            <div class="row">
               <div class="col-xl-8 col-lg-12">
                  <div class="blog-main-wrapper mb-0">
                     <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                           <div class="blog-wrapper position-relative blog-details-wrapper mb-30">
                              <div class="blog-thumb ">
                                 <img :src="blogItems.blogImage" alt="blog-img">
                              </div>
                              <div class="blog-tag">
                                 <i class="fal fa-folder-open"></i>
                                 <NuxtLink to="/blog">{{ blogItems.blogTag }}</NuxtLink>
                              </div>
                              <div class="blog-content-wrapper">
                                 <div class="blog-meta">
                                    <div class="blog-date">
                                       <i class="flaticon-calendar"></i>
                                       <span>{{ blogItems.blogDate }}</span>
                                    </div>
                                    <div class="blog-user">
                                       <i class="flaticon-avatar"></i>
                                       <span>{{ blogItems.blogUser }}</span>
                                    </div>
                                 </div>
                                 <div class="blog-content">
                                    <p>{{ blogItems.blogDesc }}</p>
                                    <p>
                                       The participants will get general ideas of the land management
                                       system of business. Everyone must work, but for many of us that job isn’t just a
                                       paycheck, it’s an opportunity to express ourselves and make
                                       something better. Entrepreneurs and go-getters often feel as if they carry the
                                       weight of an entire organization on their
                                       backs, and therefore could always use a little extra motivation.</p>
                                    <blockquote>
                                       <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered
                                          chinwag on your bike mate don’t get
                                          shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load
                                          of old tosh blag horse.</p>
                                       <p class="mb-0"><cite>Eduman</cite></p>
                                    </blockquote>
                                    <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no
                                       biggie the BBC burke gosh boot so I
                                       said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish
                                       spend a penny my good sir wind up
                                       hunky-dory. Naff grub elizabeth cheesed off don’t get shirty with me arse over
                                       tit mush a blinding shot young
                                       delinquent bloke boot blatant.</p>
                                    <p><img src="/img/blog/blog-04.jpg" alt="img"></p>
                                    <h4 class="mb-20">Typography is the powerful element you will ever need</h4>
                                    <p>The participants will get
                                       general ideas of the land management
                                       system of business. Everyone must work, but for many of us that job isn’t just a
                                       paycheck, it’s an opportunity to express ourselves and make
                                       something better. Entrepreneurs and go-getters often feel as if they carry the
                                       weight of an entire organization on their
                                       backs, and therefore could always use a little extra motivation.</p>
                                    <p>When it comes to designing better links and sending better emails, Slava
                                       Shestopalov has a few tips on how to improve
                                       your website’s experience while accessibility in mind. There are so many websites
                                       out there that have not considered the overall
                                       usability of their visually impaired users.</p>
                                    <div class="blog__details__tag tagcloud"><span>Post Tags : </span>
                                       <a href="#">Class</a>
                                       <a href="#">Course</a>
                                       <a href="#">Design</a>
                                       <a href="#">Science</a>
                                    </div>
                                 </div>
                              </div>
                              <div class="latest-comments mb-50 mt-50">
                                 <h3>3 Comments</h3>
                                 <ul>
                                    <li>
                                       <div class="comments-box">
                                          <div class="comments-info d-flex">
                                             <div class="comments-avatar mr-20">
                                                <img src="/img/member/member-img-04.png" alt="">
                                             </div>
                                             <div class="avatar-name">
                                                <h5>Eleanor Fant</h5>
                                                <span class="post-meta"> July 14, 2022</span>
                                             </div>
                                          </div>
                                          <div class="comments-text ml-65">
                                             <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David
                                                blatant have it, standard A bit of
                                                how's your father my lady absolutely.</p>
                                             <div class="comments-replay">
                                                <a href="#">Reply</a>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li class="children">
                                       <div class="comments-box">
                                          <div class="comments-info d-flex">
                                             <div class="comments-avatar mr-20">
                                                <img src="/img/member/member-img-01.png" alt="">
                                             </div>
                                             <div class="avatar-name">
                                                <h5>Dominic</h5>
                                                <span class="post-meta">April 16, 2022 </span>
                                             </div>
                                          </div>
                                          <div class="comments-text ml-65">
                                             <p>David blatant have it, standard A bit of how's your father my lady
                                                absolutely.</p>
                                             <div class="comments-replay">
                                                <a href="#">Reply</a>
                                             </div>
                                          </div>
                                       </div>
                                       <ul>
                                          <li class="children-2">
                                             <div class="comments-box">
                                                <div class="comments-info d-flex">
                                                   <div class="comments-avatar mr-20">
                                                      <img src="/img/member/member-img-02.png" alt="">
                                                   </div>
                                                   <div class="avatar-name">
                                                      <h5>Von Rails</h5>
                                                      <span class="post-meta">April 18, 2022 </span>
                                                   </div>
                                                </div>
                                                <div class="comments-text ml-65">
                                                   <p>He nicked it get stuffed mate spend a penny plastered.!</p>
                                                   <div class="comments-replay">
                                                      <a href="#">Reply</a>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                                 <ul>
                                    <li>
                                       <div class="comments-box">
                                          <div class="comments-info d-flex">
                                             <div class="comments-avatar mr-20">
                                                <img src="/img/member/member-img-04.png" alt="">
                                             </div>
                                             <div class="avatar-name">
                                                <h5>Eleanor Fant</h5>
                                                <span class="post-meta"> July 14, 2022</span>
                                             </div>
                                          </div>
                                          <div class="comments-text ml-65">
                                             <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David
                                                blatant have it, standard A bit of
                                                how's your father my lady absolutely.</p>
                                             <div class="comments-replay">
                                                <a href="#">Reply</a>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li class="children">
                                       <div class="comments-box">
                                          <div class="comments-info d-flex">
                                             <div class="comments-avatar mr-20">
                                                <img src="/img/member/member-img-01.png" alt="">
                                             </div>
                                             <div class="avatar-name">
                                                <h5>Dominic</h5>
                                                <span class="post-meta">April 16, 2022 </span>
                                             </div>
                                          </div>
                                          <div class="comments-text ml-65">
                                             <p>David blatant have it, standard A bit of how's your father my lady
                                                absolutely.</p>
                                             <div class="comments-replay">
                                                <a href="#">Reply</a>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                              <div class="blog__comment">
                                 <h3>Leave a Comment</h3>
                                 <form action="#">
                                    <div class="row">
                                       <div class="col-xxl-6 col-xl-6 col-lg-6">
                                          <div class="blog__comment-input">
                                             <input type="text" placeholder="Your Name">
                                          </div>
                                       </div>
                                       <div class="col-xxl-6 col-xl-6 col-lg-6">
                                          <div class="blog__comment-input">
                                             <input type="email" placeholder="Your Email">
                                          </div>
                                       </div>
                                       <div class="col-xxl-12">
                                          <div class="blog__comment-input">
                                             <input type="text" placeholder="Website">
                                          </div>
                                       </div>
                                       <div class="col-xxl-12">
                                          <div class="blog__comment-input">
                                             <textarea placeholder="Enter your comment ..."></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xxl-12">
                                          <div class="blog__comment-agree d-flex align-items-center mb-20">
                                             <input class="e-check-input" type="checkbox" id="e-agree">
                                             <label class="e-check-label" for="e-agree">Save my name, email, and website
                                                in this browser for the next
                                                time I comment.</label>
                                          </div>
                                       </div>
                                       <div class="col-xxl-12">
                                          <div class="blog__comment-btn">
                                             <button type="submit" class="edu-btn">Post Comment</button>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-8 col-md-8">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
   </div>

</template>


