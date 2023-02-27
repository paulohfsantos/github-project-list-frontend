import { defineStore } from 'pinia'

export const useLoading = defineStore('loading', {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading
    }
  }
})
