<template>
  <div>
    projeto {{ $route.params.id }}
  </div>
</template>

<script setup lang="ts">
import { useGithub } from '@/store/github';

const github = useGithub();

</script>
