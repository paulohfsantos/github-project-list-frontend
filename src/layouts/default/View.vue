<template>
  <v-main>
    <loading v-if="loading.loading" />
    <snackbar />

    <layout />

    <v-container :style="{ maxWidth: '1000px' }">
      <router-view />
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import Loading from '@/components/Loading/Loading.vue';
import Snackbar from '@/components/Snackbar/Snackbar.vue';
import Layout from '@/components/layout/Layout.vue';

import { useLoading } from '@/store/loading';

const loading = useLoading();
</script>
