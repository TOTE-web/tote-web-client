import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpened: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState,
  reducers: {
    setSidebarState: (state, action) => {
      state.isOpened = action.payload
    },
  },
})

export const { setSidebarState } = sidebarSlice.actions
export default sidebarSlice.reducer
