<template>
  <div class="main__layout">
    <div class="d-flex justify-space-around align-center">
      <v-list class="d-flex">
        <v-list-item
          exact
          v-for="item in items"
          :key="item.text"
          :to="item.to"
          :title="item.text"
        ></v-list-item>
      </v-list>

      <div class="theme__toggle">
        <!-- <v-switch
          v-model="dark"
          :label="dark ? 'Dark' : 'Light'"
          color="primary"
          @change="toggleTheme"
        /> -->
        <v-btn>fodase</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useGithub } from '@/store/github';

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

<style lang="scss"></style>
