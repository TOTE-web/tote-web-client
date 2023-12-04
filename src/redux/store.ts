import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './reducers/sidebarSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer
  },
})
