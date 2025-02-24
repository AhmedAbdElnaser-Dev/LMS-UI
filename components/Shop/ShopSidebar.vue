<script>
export default {
    name: "app",
    data() {
        return {
            showCategories: false,
            showRatings: false,
            showPrice: false,
            showLevel: false,
            showDuration: false,
            selectedFilters: {
                categories: [],
                rating: null,
                price: null,
                levels: [],
                durations: []
            },
            appliedFilters: null // Stores last applied filters
        };
    },
    computed: {
        isFilterActive() {
            return JSON.stringify(this.selectedFilters) !== JSON.stringify(this.appliedFilters);
        }
    },
    methods: {
        handleCategories() {
            this.showCategories = !this.showCategories;
        },
        handleRatings() {
            this.showRatings = !this.showRatings;
        },
        handlePrice() {
            this.showPrice = !this.showPrice;
        },
        handleLevel() {
            this.showLevel = !this.showLevel;
        },
        handleDuration() {
            this.showDuration = !this.showDuration;
        },
        updateFilters(type, value) {
            if (type === "categories" || type === "levels" || type === "durations") {
                const index = this.selectedFilters[type].indexOf(value);
                if (index === -1) {
                    this.selectedFilters[type].push(value);
                } else {
                    this.selectedFilters[type].splice(index, 1);
                }
            } else {
                this.selectedFilters[type] = value;
            }
        },
        applyFilters() {
            console.log("Applied Filters:", this.selectedFilters);
            this.appliedFilters = JSON.parse(JSON.stringify(this.selectedFilters)); // Save applied filters
        }
    },
    mounted() {
        this.appliedFilters = JSON.parse(JSON.stringify(this.selectedFilters)); // Set default filters on load

        // Read category from query and set it in selectedFilters
        const categoryFromQuery = this.$route.query.category;
        if (categoryFromQuery) {
            this.selectedFilters.categories = Array.isArray(categoryFromQuery) ? categoryFromQuery : [categoryFromQuery];
        }
    }
};
</script>

<template>
    <div class="shop-sidebar">
        <!-- Categories -->
        <div class="course-sidebar-widget mb-20">
            <div :class="{ 'course-sidebar-info': true, 'content-hidden': showCategories }">
                <h3 class="drop-btn" @click="handleCategories">{{ $t("Categories") }}</h3>
                <ul>
                    <li v-for="category in ['Quraan', 'Tajweed', 'Arabic']" :key="category">
                        <div class="course-sidebar-list">
                            <input class="edu-check-box" type="checkbox" :id="category"
                                v-model="selectedFilters.categories" :value="category">
                            <label class="edu-check-label" :for="category">{{ $t(category) }}</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Ratings -->
        <div class="course-sidebar-widget mb-20">
            <div :class="{ 'course-sidebar-info': true, 'content-hidden': showRatings }">
                <h3 class="drop-btn" @click="handleRatings">{{ $t("Ratings") }}</h3>
                <ul>
                    <li v-for="stars in 5" :key="stars">
                        <div class="course-sidebar-list">
                            <input class="edu-check-box" type="radio" :id="'rating-' + stars" name="rating"
                                v-model="selectedFilters.rating" :value="stars">
                            <label class="edu-check-star" :for="'rating-' + stars">
                                <i v-for="n in stars" :key="n" class="fas fa-star"></i>
                                <i v-for="n in 5 - stars" :key="'empty' + n" class="fal fa-star"></i>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Price -->
        <div class="course-sidebar-widget mb-20">
            <div :class="{ 'course-sidebar-info': true, 'content-hidden': showPrice }">
                <h3 class="drop-btn" @click="handlePrice">{{ $t("Price") }}</h3>
                <ul>
                    <li v-for="price in ['All', 'Free', 'Paid']" :key="price">
                        <div class="course-sidebar-list">
                            <input class="edu-check-box" type="radio" :id="price" name="price"
                                v-model="selectedFilters.price" :value="price">
                            <label class="edu-check-label" :for="price">{{ $t(price) }}</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Level -->
        <div class="course-sidebar-widget mb-20">
            <div :class="{ 'course-sidebar-info': true, 'content-hidden': showLevel }">
                <h3 class="drop-btn" @click="handleLevel">{{ $t("Level") }}</h3>
                <ul>
                    <li v-for="level in ['AllLevels', 'Beginner', 'Intermediate', 'Expert']" :key="level">
                        <div class="course-sidebar-list">
                            <input class="edu-check-box" type="checkbox" :id="level" v-model="selectedFilters.levels"
                                :value="level">
                            <label class="edu-check-label" :for="level">{{ $t(level) }}</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Duration -->
        <div class="course-sidebar-widget mb-20">
            <div :class="{ 'course-sidebar-info': true, 'content-hidden': showDuration }">
                <h3 class="drop-btn" @click="handleDuration">{{ $t("Duration") }}</h3>
                <ul>
                    <li v-for="duration in ['LessThan1Hour', 'OneToTwoHours', 'TwoToFiveHours', 'SixToSevenHours', 'SevenToTenHours']"
                        :key="duration">
                        <div class="course-sidebar-list">
                            <input class="edu-check-box" type="checkbox" :id="duration"
                                v-model="selectedFilters.durations" :value="duration">
                            <label class="edu-check-label" :for="duration">{{ $t(duration) }}</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Filter Button -->
        <div class="filter-btn-container text-center">
            <button class="apply-filters-btn" @click="applyFilters" :disabled="!isFilterActive">
                {{ $t("ApplyFilters") }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.apply-filters-btn {
    background-color: #2467ec;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    width: 100%;
    margin-top: 10px;
}

.apply-filters-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
