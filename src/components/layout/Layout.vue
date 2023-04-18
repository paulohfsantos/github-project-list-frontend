<template>
  <div class="main__layout">
    <div class="d-flex justify-space-around align-center">
      <v-list height="100%" width="100%" class="d-flex">
        <v-list-item
          exact
          v-for="item in items"
          :key="item.text"
          :to="item.to"
          :title="item.text"
        ></v-list-item>

        <v-spacer />

        <div class="mr-4">
          <Switch />
        </div>
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGithub } from '@/store/github';

import Switch from '@/components/Switch/Switch.vue';

const items = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Projects', to: '/projects' },
  // { text: 'Contact', to: '/contact' },
];

const github = useGithub();

const setUpRepositories = async () => {
  await github.getRepositoryByCount('paulohfsantos', 8);
  await github.getRepoUser('paulohfsantos');
};

// theme toggle

onMounted(() => { setUpRepositories() });
</script>
