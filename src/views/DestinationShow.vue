<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
      >
        <ExperiencedCard :experience="experience" />
      </router-link>
    </div>
    <router-view />
  </section>
</template>
<script>
import SourceData from "../data.json";
import ExperiencedCard from "../components/ExperienceCard.vue";
export default {
  components: { ExperiencedCard },
  props: { id: { type: Number, required: true } },
  computed: {
    destination() {
      return SourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
};
</script>
