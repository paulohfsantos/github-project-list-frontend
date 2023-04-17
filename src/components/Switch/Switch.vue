<template>
  <v-switch v-model="darkMode" label="Dark Mode" color="primary" @change="toggleTheme" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const darkMode = computed(() => theme.name.value === 'dark');
const lightMode = computed(() => theme.name.value === 'light');

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark
    ? 'light'
    : 'dark';
};
</script>
