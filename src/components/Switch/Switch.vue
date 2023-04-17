<template>
  <v-switch
    v-model="darkMode"
    flat
    density="compact"
    hide-details
    :label="label"
    @change="toggleCustomTheme"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify';
import { useCustomTheme } from '@/store/theme';

const theme = useTheme();

const darkMode = ref(theme.name.value === 'dark');
const lightMode = ref(theme.name.value === 'light');

const label = computed(() => {
  if (darkMode.value) return 'Light Mode';
  if (lightMode.value) return 'Dark Mode';
});

const toggleCustomTheme = () => {
  const { toggleTheme } = useCustomTheme();
  toggleTheme();
};
</script>
