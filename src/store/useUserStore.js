import { create } from 'zustand';

const useUserStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  clearUser: () => set({ user: null }),
  getUser: () => get().user,
  setUser: data => set({ user: data }),
}));

export default useUserStore;
