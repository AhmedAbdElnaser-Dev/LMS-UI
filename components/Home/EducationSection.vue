<template>
    <section class="education-area position-relative pt-85">
        <div class="container">
            <img class="education-shape-2" src="/img/shape/education-shape-04.png" alt="shape">
            <img class="education-shape-3" src="/img/shape/education-shape-01.png" alt="shape">
            <img class="education-shape-4" src="/img/shape/education-shape-03.png" alt="shape">
            <div class="row">
                <div class="col-xl-4 col-lg-4 offset-xl-2 offset-lg-2">
                    <div class="section-title mb-30">
                        <h2>
                            <span class="down-mark-line">{{ $t("gettingStartedSteps") }}</span>
                        </h2>
                    </div>
                    <div class="education-content mb-30">
                        <p>{{ $t("gettingStartedStepsBody") }}</p>
                        <NuxtLink to="/about" class="edu-sec-btn">Watch how to start</NuxtLink>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 ">
                    <div class="education-img mb-30">
                        <img src="/img/home _steps.png" alt="image not found">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>