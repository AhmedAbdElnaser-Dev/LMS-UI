<template>
    <div :class="space_minus ? space_minus : 'features-area pt-45 pb-15'"
        :style="{ backgroundImage: `url(${featureBg})` }">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="features-wrapper d-flex align-items-center mb-30 gap-20" style="gap: 20px;">
                        <div class="features-icon" style="margin: 0;">
                            <i class="flaticon-online-course"></i>
                        </div>
                        <div class="features-content">
                            <h3>{{ $t("Learnwithskills") }}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="features-wrapper d-flex align-items-center mb-30 gap-20" style="gap: 20px;">
                        <div class="features-icon" style="margin: 0;">
                            <i class="flaticon-certificate"></i>
                        </div>
                        <div class="features-content">
                            <h3>{{ $t('EarncertificatesAnddegrees') }}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="features-wrapper d-flex align-items-center mb-30" style="gap: 20px;">
                        <div class="features-icon" style="margin: 0;">
                            <i class="flaticon-laptop"></i>
                        </div>
                        <div class="features-content">
                            <h3>{{ $t('LearnfromAnywhereAnytime') }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'feature',
    props: {
        space_minus: String
    },
    data() {
        return {
            featureBg: '/img/fact/fact.png',
            FeatureList: [{
                featureTitle: this.$t("Learnwithskills"),
                featureIcon: 'flaticon-online-course',
            },
            {
                featureTitle: this.$t('EarncertificatesAnddegrees'),
                featureIcon: 'flaticon-certificate',
            },
            {
                featureTitle: this.$t('LearnfromAnywhereAnytime'),
                featureIcon: 'flaticon-laptop',
            }
            ],
        }
    }
}
</script>
