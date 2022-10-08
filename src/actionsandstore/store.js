import { configureStore } from '@reduxjs/toolkit'
import Todoekle from './Todoekle'











export default configureStore({
  reducer: {
    todo:Todoekle
  }
})