import { create } from "zustand";
import { Product } from "../pages/Homepage";

type ProductStore = {
    cartItems: Product[],
    addToCart: (product: Product) => void
    increaseQty: (productId: number) => void
    decreaseQty: (productId: number) => void
    removeFromCart: (productId: number) => void
}

export const useCartStore = create<ProductStore>((set) => ({
    cartItems: [],

    addToCart: (product: Product) => {
        set((state) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === product.id)
            if (itemIndex !== -1) {
                state.cartItems[itemIndex].quantity++
            } else {
                state.cartItems.push({ ...product, quantity: 1 })
            }
            return {
                cartItems: [...state.cartItems]
            }
        })
    },

    removeFromCart: (productId: number) => {
        set((state) => {
            const updatedCartItems = state.cartItems.filter((item) => item.id !== productId)
            return {
                cartItems: updatedCartItems
            }
        })
    },

    increaseQty: (productId: number) => {
        set((state) => {
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity ? item.quantity + 1 : 1 };
                }
                return item;
            });
            return {
                cartItems: updatedCartItems,
            };
        });
    },

    decreaseQty: (productId: number) => {
        set((state) => {
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1 };
                }
                return item;
            });
            return {
                cartItems: updatedCartItems,
            };
        });
    },
}))
    ;