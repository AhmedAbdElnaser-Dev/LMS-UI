<script>
import ShopMain from '~~/components/Shop/ShopMain.vue';

export default {
  name: "shop",
  data() {
    return {
      category: this.$route.query.category
    };
  },
  components: {
    ShopMain
  },
};
</script>

<template>
  <ShopMain :category="category" />
</template>

<style scoped></style>
