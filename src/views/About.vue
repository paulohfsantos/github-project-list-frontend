<template>
  <div class="about_me">
    <v-card density="comfortable" :width="1000">
      <v-card-title>
        About me
      </v-card-title>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useGithub } from '@/store/github';

const github = useGithub();
const route = useRoute();

const lang = computed(() =>
  github.repository.language
);
</script>
