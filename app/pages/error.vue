<script lang="ts" setup>
definePageMeta({
  ssr: false
})

const route = useRoute()

const error = route.query.error || "An unexpected error occurred.";

</script>

<template>
  <div
    class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error min-w-1/2">
      <span>Oh no! {{ error }}</span>

    </div>
    <NuxtLink to="/" class="btn btn-primary mt-4">
      Go back to home
      <Icon name="tabler:arrow-back" size="32" />
    </NuxtLink>
  </div>
</template>

<style></style>