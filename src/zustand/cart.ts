import { Product } from "@/helpers/sharedTypes";
import { removeKey } from "@/helpers/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  cart: {
    cartCount: number;
    cartData: {
      [productId: string]: {
        quantity: number;
        product: Product;
      };
    };
  };
};

type Actions = {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  decrementProductQuantity: (prodcutId: string) => void;
  resetCart: () => void;
};

export const useCartStore = create<State & Actions>()(
  persist(
    (set) => ({
      cart: {
        cartCount: 0,
        cartData: {},
      },
      addToCart: (product) =>
        set((state) => ({
          ...state,
          cart: {
            cartCount: state.cart.cartCount + 1,
            cartData: {
              ...state.cart.cartData,
              [product?._id]: {
                product,
                quantity: state?.cart?.cartData?.[product?._id] ? state?.cart?.cartData?.[product?._id]?.quantity + 1 : 1,
              },
            },
          },
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          ...state,
          cart: {
            cartCount: state.cart.cartCount - state?.cart?.cartData?.[productId].quantity || 1,
            cartData: removeKey(state.cart.cartData, productId),
          },
        })),
      decrementProductQuantity: (productId) =>
        set((state) => ({
          ...state,
          cart: {
            cartCount: state.cart.cartCount - 1,
            cartData: {
              ...state.cart.cartData,
              [productId]: {
                ...state.cart.cartData?.[productId],
                quantity: (state?.cart?.cartData?.[productId]?.quantity || 1) - 1,
              },
            },
          },
        })),
      resetCart: () =>
        set((state) => ({
          ...state,
          cart: {
            cartCount: 0,
            cartData: {},
          },
        })),
    }),
    {
      name: "shop-n-vibe-cart", // name of the item in the storage.
    }
  )
);

export default useCartStore;
