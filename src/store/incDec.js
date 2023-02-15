import { createSlice } from '@reduxjs/toolkit'

const countItemArr =
    localStorage.getItem('countItemArr')
        ? JSON.parse(localStorage.getItem('countItemArr'))
        : [];


const initialState = {
    countItemArr: countItemArr
}

const incDecSlice = createSlice({
    name: 'incDec',
    initialState: initialState,

    reducers: {



        addItem(state, action) {
            const existingIndex = state.countItemArr.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.countItemArr[existingIndex] = {
                    ...state.countItemArr[existingIndex],
                    quantity: state.countItemArr[existingIndex].quantity + 1,
                };

            } else {
                let tempProductItem = { ...action.payload, quantity: 1 };
                state.countItemArr.push(tempProductItem);

            }
            localStorage.setItem("countItemArr", JSON.stringify(state.countItemArr));
        },

        removeItem(state, action) {
            const itemIndex = state.countItemArr.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.countItemArr[itemIndex].quantity > 1) {
                state.countItemArr[itemIndex].quantity -= 1;


            } else if (state.countItemArr[itemIndex].quantity === 1) {
                const nextCountItemArr = state.countItemArr.filter(
                    (item) => item.id !== action.payload.id
                );
                state.countItemArr = nextCountItemArr;
            }

            localStorage.setItem("countItemArr", JSON.stringify(state.countItemArr));
        }

    }

})

export const incDecActions = incDecSlice.actions
export default incDecSlice

