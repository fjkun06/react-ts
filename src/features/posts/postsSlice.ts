import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Init = {
  id: string,
  title: string,
  content: string,
}

const initialState: Init[] = [
  {id: '1', title: "First Post!", content: 'Hello!'},
{id: '2',title: "Second Post!", content: "More Text"}]

const postsSlice = createSlice({
name: 'posts',
initialState,
reducers: {
  postAdded(state, action: PayloadAction<Init>) {
    state.push(action.payload)
  }
}
})

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer