<template>
  <v-card density="comfortable" :width="1000">
    <v-card-title>
      <h4 class="headline mb-0">
        {{ $dashRemove(title) }}
      </h4>
    </v-card-title>

    <v-card-text>
      <v-row justify="center">
        <v-col align-self="stretch" cols="4">col 1</v-col>
        <v-col cols="4">col 2</v-col>
        <v-col cols="4">col 3</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useGithub } from '@/store/github';

const github = useGithub();
const route = useRoute();

const title = computed(() =>
  (route.params.name as string).replace(/-/g, ' ')
);

</script>
