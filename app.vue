<template>
  <LoadingSpinner :loading="authStore.loading" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export default {
  setup() {
    const authStore = useAuthStore();
    return {
      authStore
    };
  },
  components: {
    LoadingSpinner
  }
}

</script>
