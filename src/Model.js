// This class encapsulates all the CRUD operations with the localStorage
import { nanoid } from "nanoid";

// CRUD Operations 

export default class Model{
    //Create or Update 
    static saveTodos(todo){
            const todos = Model.getTodos();
            const existingTodo = todos.find(td=> td.uuid ==todo.uuid)
           
             // if exists update
            if(existingTodo){
                existingTodo.title = todo.title;
                existingTodo.description =  todo.description;
                existingTodo.duedate = todo.duedate;
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
        const todos = Model.getTodos()
        const newTodoList = todos.filter(td => td.uuid!=uuid)

        localStorage.setItem('todoapp-todos', JSON.stringify(newTodoList));
    }

    
}