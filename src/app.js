import Model from "./Model.js";
import View from "./View.js";


const projects = [];
const todoExamples = [];

//This works as a Controller
export default class App{
    constructor(Model, View){
        this.View = View;
        this.Model = Model;
        
        this.View.renderTodos();

        this.View.createProjectBinder();
        this.View.createTodoBinder(this.createTodoHandler);
        this.View.editTodoBinder(this.editTodoHandler)
        this.View.deleteTodoBinder(this.deleteTodoHandler);
        
    }



    createTodoHandler(){

    }

    editTodoHandler(){

    }

    deleteTodoHandler(){

    }

}