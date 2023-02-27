<template>
  <div class="loading_cpnt">
    <v-progress-circular
      :model-value="20"
      :size="50"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { useLoading } from '@/store/loading';

const loading = useLoading();
</script>

<style lang="scss">
.loading_cpnt {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3333338a;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>
