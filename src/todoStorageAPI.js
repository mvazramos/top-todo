// This class encapsulates all the CRUD operations with the localStorage
import Todo from "./todo.js";
import { nanoid } from "nanoid";

// CRUD Operations 

export default class todoStorageAPI{

    //Create or Update 
    static saveTodos(todo){
            const todos = todoStorageAPI.getTodos();
            const existingTodo = todos.find(td=> td.uuid ==todo.uuid)
           
             // if exists update
            if(existingTodo){
                existingTodo.title = todo.title;
                existingTodo.description =  todo.description;
                existingTodo.dueDate = todo.dueDate;
                existingTodo.priority =  todo.priority;
            } else{
            // if not exist create
                todo.uuid=nanoid();

                todos.push(todo);
            }  
            localStorage.setItem('todoapp-todos', JSON.stringify(todos));
    }
    
    //Read
    static getTodos(){
        const todos = JSON.parse(localStorage.getItem("todoapp-todos") || "[]");
        return todos;
    }

    //Delete
    static deleteTodo(uuid){
        const todos = todoStorageAPI.getTodos()
        const newTodoList = todos.filter(td => td.uuid!=uuid)

        localStorage.setItem('todoapp-todos', JSON.stringify(newTodoList));
    }

    
}