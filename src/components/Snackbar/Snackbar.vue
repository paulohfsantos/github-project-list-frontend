<template>
  <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
    {{ snackbar.message }}
    <template v-slot:action>
      <v-btn variant="text" @click="snackbar.show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbar } from '@/store/snackbar';

const snackbar = useSnackbar();
</script>
