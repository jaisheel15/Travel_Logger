import { defineStore } from 'pinia'
import { createAuthClient } from "better-auth/client"

const authClient = createAuthClient()

export const useAuthStore = defineStore('useAuthStore', ()=>{
  const loading = ref(false)

const signIn = async () => {
  loading.value = true
  await authClient.signIn.social({
    provider: "github",
    callbackURL: '/dashboard'
  })
  loading.value = false
}

return {
  loading,
  signIn,
}

})
