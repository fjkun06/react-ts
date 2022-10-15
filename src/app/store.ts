import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice2";
import counterReducer2 from "../features/counter2/counterSlice"
import postsReducer from "../features/posts/postsSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // comments: () => null,
    // userts: () => null,
    counter: counterReducer,
    counter2: counterReducer2

  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  