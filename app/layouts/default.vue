<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { auth } from '~~/lib/auth';

  const authStore = useAuthStore()
  await authStore.init()
</script>

<style></style>