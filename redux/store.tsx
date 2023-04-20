import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userReducer } from "./form/reducers";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
    userReducer
});

const rootPersistConfig = {
    key: 'root',
    storage: storage,
}

let persistedReducers = persistReducer(rootPersistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: true,
            serializableCheck: false,
            thunk: true,
        }),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Custom hook for handle async functions.
export const useThunkDispatch = () => useDispatch<AppDispatch>();

// Custom hook for basic selectors.
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const dispatch = store.dispatch;