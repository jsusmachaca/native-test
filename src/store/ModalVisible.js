import { create } from "zustand";


export const useModalVisibleStore = create((set) => {
    return {
        modalVisible: false,
        fetchVisible: () => set((state) => ({
            modalVisible: !state.modalVisible
        })),
    }
})