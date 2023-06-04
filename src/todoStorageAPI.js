// This class encapsulates all the CRUD operations with the localStorage
import Todo from "./todo.js";

export default class todoStorage{

    //Create or Update 
    static saveTodos(){


            // if exists update
    
    
            // if not exist create
    
    }
    
    //Read
    static getTodos(){
        const todos= JSON.parse(localStorage.getItem('todoapp-todos') || '[]');
    }

    //Delete
    static deleteTodo(){


    }

    
}