<template>
  <div class="main__layout">
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>kekw</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app clipped dark v-model="drawer">
      <v-list dense>
        <v-list-item link exact to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item in github.repositories"
          :key="item.id"
          exact
          link
          :to="`/projects/${item.id}`"
        >
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGithub } from '@/store/github';

const drawer = ref(false);
const github = useGithub();

const setUpRepositories = async () => {
  await github.getRepositoryByCount('paulohfsantos', 8);
};

onMounted(async () => {
  await setUpRepositories();
});
</script>
