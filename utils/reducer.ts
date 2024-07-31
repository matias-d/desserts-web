import { DessertI } from "@/types/Dessert";

export const cartInitialState: DessertI[] = typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('cart') || '[]')
    : [];

type optionTypes = 'ADD_TO_CART' | 'REMOVE_TO_CART' | 'NEW_ORDER' | 'INCREMENT_PRODUCT' | 'DECREMENT_PRODUCT';

interface Action {
    type: optionTypes;
    payload?: DessertI;
}

export const updateLocalStorage = (state: DessertI[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
    }
}

type functionUpdate = (state: DessertI[], action: Action) => DessertI[];

interface UpdateStateI {
    'ADD_TO_CART': functionUpdate;
    'REMOVE_TO_CART': functionUpdate;
    'NEW_ORDER': functionUpdate;
    'INCREMENT_PRODUCT': functionUpdate;
    'DECREMENT_PRODUCT': functionUpdate;
}

const UPDATE_STATE_BY_ACTION: UpdateStateI = {
    ADD_TO_CART: (state, action) => {
        if (!action.payload || !action.payload.id) {
            throw new Error("Payload or id is missing in ADD_TO_CART action");
        }

        const newState = [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ];

        updateLocalStorage(newState);

        return newState;
    },
    REMOVE_TO_CART: (state, action) => {
        if (!action.payload || !action.payload.id) {
            throw new Error("Payload or id is missing in REMOVE_TO_CART action");
        }

        const { id } = action.payload;
        const newState = state.filter(item => item.id !== id);
        updateLocalStorage(newState);
        return newState;
    },
    NEW_ORDER: () => {
        updateLocalStorage([]);
        return [];
    },
    DECREMENT_PRODUCT: (state, action) => {
        if (!action.payload || !action.payload.id) {
            throw new Error("Payload or id is missing in DECREMENT_PRODUCT action");
        }

        const { id } = action.payload;

        const dessertInCartIndex = state.findIndex(item => item.id === id);

        if (dessertInCartIndex < 0) return state;

        if (state[dessertInCartIndex].quantity === 1) {
            const newState = state.filter(s => s.id !== id);
            updateLocalStorage(newState);
            return newState;
        }

        const newState = [
            ...state.slice(0, dessertInCartIndex),
            { ...state[dessertInCartIndex], quantity: state[dessertInCartIndex].quantity! - 1 },
            ...state.slice(dessertInCartIndex + 1)
        ];
        updateLocalStorage(newState);
        return newState;
    },
    INCREMENT_PRODUCT: (state, action) => {
        if (!action.payload || !action.payload.id) {
            throw new Error("Payload or id is missing in INCREMENT_PRODUCT action");
        }

        const { id } = action.payload;

        const dessertInCartIndex = state.findIndex(item => item.id === id);

        if (dessertInCartIndex < 0) return state;

        const newState = [
            ...state.slice(0, dessertInCartIndex),
            { ...state[dessertInCartIndex], quantity: state[dessertInCartIndex].quantity! + 1 },
            ...state.slice(dessertInCartIndex + 1)
        ];
        updateLocalStorage(newState);
        return newState;
    }
}

export function cartReducer(state: DessertI[], action: Action) {
    const { type } = action;
    const updateState = UPDATE_STATE_BY_ACTION[type];
    return updateState ? updateState(state, action) : state;
}
