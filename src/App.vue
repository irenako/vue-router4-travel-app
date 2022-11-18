<template>
  <TheNavigation />
  <div class="container">
    <router-view :key="$router.path" />
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>
