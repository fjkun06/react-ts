import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    posts: () => console.log('hello'),
    comments: () => console.log('hello'),
    userts: () => console.log('hello'),

  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  