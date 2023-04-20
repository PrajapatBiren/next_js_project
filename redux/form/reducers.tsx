import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
interface UsersState {
    info: any,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed' | boolean,
    specificData: any,
    disabled: boolean
}
const initialState: UsersState = {
    info: [],
    loading: false,
    specificData: {},
    disabled: false
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            const newItem = { id: uuidv4(), ...action.payload.body };
            state.info.push(newItem)
            state.disabled = true
        },
        specificUserData: (state, action) => {
            const index = state.info.findIndex((item: any) => item.id === action.payload.id);
            state.specificData = state.info[index]
            state.disabled = true
        },
        removeUsersData: (state, action) => {
            state.info.splice(state.info.findIndex((item: any) => item.id === action.payload.id), 1);
            state.specificData = {}
        },
        addNewUserAction: (state) => {
            state.specificData = {}
            state.disabled = false
        },
        updateUserData: (state, action) => {
            const index = state.info.findIndex((item: any) => item.id === action.payload.body.id);
            if (index !== -1) {
                state.info[index] = { ...state.info[index], ...action.payload.body };
            }
            state.disabled = true
            state.specificData = action.payload.body
        },
        editUserData: (state) => {
            state.disabled = false
        },
    },
    extraReducers: (builder) => {
    },
})




export const userReducer = userSlice.reducer
export const {
    addUserData,
    removeUsersData,
    specificUserData,
    updateUserData,
    addNewUserAction,
    editUserData
} = userSlice.actions


