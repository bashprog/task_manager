import {create} from "zustand";

import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface PopUpStore {
    isActive: boolean,
    toggle: () => void
}

export const usePopUpStore = create<PopUpStore>()(devtools(immer((set) => ({
    isActive: true,
    toggle: () => set(state => ({isActive: !state.isActive})),
}))))