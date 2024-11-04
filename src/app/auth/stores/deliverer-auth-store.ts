import { create } from 'zustand'

interface AuthStore {
  finishedInitialStep: boolean
  setFinishedInitialStep: (initialStep: boolean) => void
  initialInfo: {
    name: string
    email: string
    password: string
    role: string
  }
  setInitialInfo: (initialInfo: {
    name: string
    email: string
    password: string
    role: string
  }) => void
}

export const useAuthStore = create<AuthStore>((set) => {
  return {
    finishedInitialStep: false,
    setFinishedInitialStep: (finishedInitialStep: boolean) =>
      set({ finishedInitialStep }),
    initialInfo: {
      name: '',
      email: '',
      password: '',
      role: 'deliverer',
    },
    setInitialInfo: (initialInfo) => set({ initialInfo }),
  }
})
