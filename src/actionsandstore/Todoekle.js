import { createSlice } from "@reduxjs/toolkit";
import alertify from "alertifyjs"

export const Todoekle = createSlice({
  name: "Todoekle",
  initialState: {
    value: "",
    degertutucu: 1,
    id:1
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
        alertify.error("lütfen bir deger giriniz")
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
        alertify.error("lütfen farklı bir deger giriniz")
      }else{
        
        state.value.push(action);
      localStorage.setItem("todos", JSON.stringify(state.value))
      alertify.success("todo başarıyla eklendi")
    

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
    removealltodos:(state)=>{
      localStorage.removeItem("todos");
      

    },
    addid:(state)=>{
      state.id += 1

    },
    
  },
});
export const { getalltodos, addtotodolist, removefromtodolist ,removealltodos,addid} =
  Todoekle.actions;
export default Todoekle.reducer;
