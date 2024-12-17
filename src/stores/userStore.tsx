// create a zustand store
import { create } from "zustand";

export const useUserStore = create((set) => ({
  role: localStorage.getItem("lbLeague-role") || "",
  username: localStorage.getItem("lbLeague-username") || "",
  nickname: localStorage.getItem("lbLeague-nickname") || "",
  token: localStorage.getItem("lbLeague-token") || "",
  setRole: (role: string) => set({ role }),
  setUsername: (username: string) => set({ username }),
  setNickname: (nickname: string) => set({ nickname }),
  setToken: (token: string) => {
    localStorage.setItem("lbLeague-token", token);
    set({ token });
  },
}));
