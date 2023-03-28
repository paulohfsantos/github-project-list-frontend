<template>
  <v-card density="comfortable" :width="1000">
    <v-card-title>
      <h4 class="headline mb-0">
        {{ $dashRemove(title) }}
      </h4>
    </v-card-title>

    <v-card-text class="mt-6">
      <v-row justify="center">
        <v-col cols="4">
          <v-icon icon="mdi-language-kotlin" size="65" />

          <div>
            <h4 class="headline mb-0">
              {{ lang }}
            </h4>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useGithub } from '@/store/github';

const github = useGithub();
const route = useRoute();

const title = computed(() =>
  (route.params.name as string)
);

const lang = computed(() =>
  github.repository.language
);

</script>
