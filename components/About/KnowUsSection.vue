<template>
    <div class="know-us-better-area pb-90">
        <div class="container">
            <div class="know-us-border pt-110">
               <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-12">
                     <div class="row">
                        <div class="col-xl-6 col-lg-6">
                           <div class="section-title mb-55">
                              <h2>Know us <span class="down-mark-line-2">Better</span> Than<br>
                                 Other Education Platform </h2>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 justify-content-end">
                           <div class="know-us-tittle mb-55">
                              <p>Helping employees gain skills and providing career development often take a back seat
                                 to business priorities but workplace better right now. Seventy percent of workers think
                                 that.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-6" v-for="item in knowUs" :key="item.id">
                     <div class="know-us-wrapper mb-30">
                        <div class="know-us-better-thumb">
                           <NuxtLink to="/contact"><img :src="item.knowUsImage" alt="know-us-img"></NuxtLink>
                        </div>
                        <div class="know-us-text text-center">
                            <NuxtLink to="/contact"><h3>{{ item.knowUsTitle }}</h3></NuxtLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'knowUs',
    data() {
        return {
            knowUs: [{
                    id: 1,
                    knowUsImage: '/img/gallery/gallary-06.jpg',
                    knowUsTitle: 'Our mission & vision',
                },
                {
                    id: 2,
                    knowUsImage: '/img/gallery/gallary-07.jpg',
                    knowUsTitle: 'How we research',
                },
                {
                    id: 3,
                    knowUsImage: '/img/gallery/gallary-08.jpg',
                    knowUsTitle: 'Why we are trusted',
                }
            ],
        }
    }
}
</script>