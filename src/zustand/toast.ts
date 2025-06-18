import { generateElementId } from "@/helpers/utils";
import { create } from "zustand";

type State = {
  toast: {
    color: "green" | "red" | "yellow";
    text: string;
    id: string;
  }[];
};

type Actions = {
  closeToast: () => void;
  toastSuccess: (text: string) => void;
  toastWarning: (text: string) => void;
  toastError: (text: string) => void;
};

const useToastStore = create<State & Actions>((set) => ({
  toast: [],
  closeToast: () =>
    set((state) => ({
      ...state,
      toast: state.toast.slice(1),
    })),
  toastSuccess: (text) => {
    return set((state) => ({
      ...state,
      toast: [...state.toast, { text: text, color: "green", id: generateElementId() }],
    }));
  },
  toastWarning: (text) =>
    set((state) => ({
      ...state,
      toast: [...state.toast, { text: text, color: "yellow", id: generateElementId() }],
    })),
  toastError: (text) =>
    set((state) => ({
      ...state,
      toast: [...state.toast, { text: text, color: "red", id: generateElementId() }],
    })),
}));

export default useToastStore;
