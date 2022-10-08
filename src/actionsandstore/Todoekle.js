import { createSlice } from "@reduxjs/toolkit";

export const Todoekle = createSlice({
  name: "Todoekle",
  initialState: {
    value: "",
    degertutucu: 1,
  },
  reducers: {
    getalltodos: (state) => {
      if (localStorage.getItem("todos") === null) {
        state.value = [];
      } else {
        state.value = JSON.parse(localStorage.getItem("todos"));
      }
    },

    addtotodolist: (state, action) => {
      if (action.payload.description === "") {
        console.log("hata");
      }

    else {
        
      state.value.map((act) => {
        if (act.payload.description === action.payload.description) {
          state.degertutucu=2

        }
      })
      if(state.degertutucu===2){
        console.log("hata")
        state.degertutucu=1
      }else{
        
        state.value.push(action);
      localStorage.setItem("todos", JSON.stringify(state.value))
    
    

      }

    }
      
    },
    removefromtodolist: (state, action) => {
      let todos;
      console.log(action)
    todos=state.value
    // todos.forEach(function(todo,index){
    //     if(todo.payload.description===action){
    //         todos.splice(index,1);
    //     }
    // })
    todos.map((todo,index)=>{
      if(todo.payload.description===action.payload){
                todos.splice(index,1);
            }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
    },
  },
});
export const { getalltodos, addtotodolist, removefromtodolist } =
  Todoekle.actions;
export default Todoekle.reducer;
