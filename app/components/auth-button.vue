<script lang="ts" setup>
const authStore = useAuthStore()
</script>

<template>
  <button class="btn btn-accent" @click="authStore.signIn" :disabled="authStore.loading">Sign In With Github
    <span v-if="authStore.loading" class="loading loading-spinner text-neutral"></span>
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>

</template>

<style></style>