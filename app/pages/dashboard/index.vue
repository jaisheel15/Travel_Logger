<script lang="ts" setup>
const route = useRoute()
const isOpen = ref(false)

onMounted(() => {
  isOpen.value = localStorage.getItem('isOpen') === 'true'
})



function toggleSidebar() {
  isOpen.value = !isOpen.value
  localStorage.setItem('isOpen',isOpen.value.toString())
}

</script>

<template>
  <div class="flex-1 flex">

    <div class="bg-base-200 transition-all duration-300" :class="{ 'w-64': !isOpen, 'w-16': isOpen }">
      <div class="flex btn btn-ghost " :class="{ 'justify-center': isOpen, 'justify-end': !isOpen }"
        @click="toggleSidebar">
        <Icon v-if="!isOpen" name="tabler:chevron-left" size="42" />
        <Icon v-else name="tabler:chevron-right" size="42" />

      </div>

      <div class="flex flex-col gap-2">
        <div class=" tooltip-right" :class="{'tooltip':isOpen}" :data-tip="isOpen ? 'Dashboard' : ''">
          <NuxtLink
            :class="{ 'bg-base-100': route.path == '/dashboard', 'justify-center': isOpen, 'justify-start': !isOpen }"
            class="btn btn-ghost w-full  flex-nowrap"  to="/dashboard">
            <Icon name="tabler:map" size="24" />
            <Transition name="grow" >
              <span v-if="!isOpen" class="ml-2">
                Locations
              </span>
            </Transition>
          </NuxtLink>
        </div>

        <div class=" tooltip-right" :class="{'tooltip':isOpen}"  :data-tip="isOpen ? 'Add Location' : ''">
          <NuxtLink
            :class="{ 'bg-base-100': route.path == '/dashboard/locations/add', 'justify-center': isOpen, 'justify-start': !isOpen }"
            to="/dashboard/locations/add" class="btn btn-ghost w-full flex-nowrap"> 
            <Icon name="tabler:circle-plus-filled" size="24" />
            <Transition name="grow" >
              <span v-if="!isOpen" class="ml-2">
                Add Location
              </span>
            </Transition>
          </NuxtLink>
        </div>

        <div class="divider"></div>

        <div class=" tooltip-right" :class="{'tooltip':isOpen}"  :data-tip="isOpen ? 'Sign Out' : ''">
          <NuxtLink
            :class="{ 'bg-base-100': route.path == '/signout', 'justify-center': isOpen, 'justify-start': !isOpen }"
            to="/sign-out" class="btn btn-ghost w-full flex-nowrap ">
            <Icon name="tabler:logout-2" size="24" />
            <Transition name="grow" >
              <span v-if="!isOpen" class="ml-2">
                Sign Out
              </span>
            </Transition>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex-1 ">

    </div>

  </div>
</template>

<style scoped>

.grow-enter-active {
  animation: grow 0.1s;
}
.grow-leave-active {
  animation: grow 0.3s reverse;
}
@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }

}

</style>