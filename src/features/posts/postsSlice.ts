import { createSlice } from "@reduxjs/toolkit"

type Init = {
  id: string,
  title: string,
  content: string,
}[]

const initialState: Init = [
  {id: '1', title: "First Post!", content: 'Hello!'},
{id: '2',title: "Second Post!", content: "More Text"}]

const postsSlice = createSlice({
name: 'posts',
initialState,
reducers: {}
})


export default postsSlice.reducer