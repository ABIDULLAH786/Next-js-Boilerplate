import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: "test",
    initialState: {
        test_value: "temp"
    },
    reducers: {
        getTestValue: (state, action) => {
            return state.test_value;
        },
        setTestValue: (state, action) => {
            state.test_value = action.payload;
        }
    }
})

export const { getTestValue, setTestValue } = testSlice.actions

export const selectTestData = (state) => state.test.test_value;


export default testSlice.reducer;
