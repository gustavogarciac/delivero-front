import { create } from 'zustand'

interface AuthStore {
  finishedInitialStep: boolean
  setFinishedInitialStep: (initialStep: boolean) => void
  initialInfo: {
    name: string
    email: string
    password: string
    picture?: string | null
    role: string
  }
  setInitialInfo: (initialInfo: {
    name: string
    email: string
    password: string
    picture?: string | null
    role: string
  }) => void
  delivererInfo: {
    address: string
    phone: string
    city: string
    birthdate: Date
    driverLicense: string
    hasVehicle: boolean
  }
  setDelivererInfo: (delivererInfo: {
    address: string
    phone: string
    city: string
    birthdate: Date
    driverLicense: string
    hasVehicle: boolean
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
    delivererInfo: {
      address: '',
      phone: '',
      city: '',
      birthdate: new Date(),
      driverLicense: '',
      hasVehicle: false,
    },
    setDelivererInfo: (delivererInfo) => set({ delivererInfo }),
  }
})
