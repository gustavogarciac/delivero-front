import { create } from 'zustand'

interface AuthStore {
  finishedInitialStep: boolean
  setFinishedInitialStep: (initialStep: boolean) => void
  initialInfo: {
    name: string
    email: string
    password: string | null
    picture?: string | null
    role: string
  }
  setInitialInfo: (initialInfo: {
    name: string
    email: string
    password: string | null
    picture?: string | null
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
      picture: null,
      password: '',
      role: 'deliverer',
    },
    setInitialInfo: (initialInfo) => set({ initialInfo }),
  }
})
