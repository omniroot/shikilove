import { create } from "zustand";

interface IGlobalStore {
  isRightSidebarOpened: boolean;
  toggleRightSidebar: () => void;
  rightSidebarContent: React.ReactNode;
  setRightSidebarContent: (content: React.ReactNode) => void;
}
export const useGlobalStore = create<IGlobalStore>((set) => ({
  isRightSidebarOpened: false,
  toggleRightSidebar: () =>
    set((state) => ({ isRightSidebarOpened: !state.isRightSidebarOpened })),
  rightSidebarContent: (<div>Content</div>),
  setRightSidebarContent: (content) => set(() => ({ rightSidebarContent: content })),
}))

