import Model from "./Model.js"
import Todo from "./todo.js"
export default class View{

    constructor(){
        this.__createNavSection()
        this.__createContentSection()
        this.__createFormPopup()
        this.__addListeners()
        this.renderTodos()
    }

    renderTodos(){
        const todosContainer = document.getElementsByClassName("todo-items")[0]
        todosContainer.innerHTML="";
        const todos =  Model.getTodos();

        todos.forEach(td => {
            const todo =  this.createTodo(td.title, td.description, td.dueDate, td.priority, td.uuid);
            todosContainer.innerHTML+=todo;
        });
        

    }

    createTodo(title, description, deadline, priority, uuid){

        return `
        <div class="todo--item" id=${uuid}>
                    <div id="control-buttons">
                        <div id="control">
                        <button type="submit" id="edit-btn">
                            <i class='bx bx-edit-alt'></i>
                        </button>
                        <button type="submit" id="delete-btn">
                            <i class='bx bx-trash' ></i>
                        </button>
                        </div>
                        <div id="radio-state">
                            <input type="checkbox">
                        </div>
                    </div>
                    <div id="todo-content">
                        <div id="todo-main">
                            <div id="todo-title" contenteditable=false>${title}</div>
                            <div id="todo-description">${description}</div>
                        </div>
                        <div id="todo-meta">
                            <div id="todo-due-date">${deadline}</div>
                            <div id="todo-priority">${priority}</div>
                        </div>    
                    </div>
        </div>
        `
    }


    __createNavSection(){
        const content = document.getElementsByClassName("side-bar")[0]
        content.innerHTML=`
                                <div class="logo-details">
                                    <i class="bx bx-menu" id="btn"></i>
                                </div>
                                <div class="projects active">
                                    <div id="project-tab">Projects</div>
                                    <div id="project-input">
                                        <form action="#" id="submit-project-form"> 
                                             <button type="submit" id="btn-submit-project">
                                                <i class='bx bx-folder-plus bx-sm'></i>
                                            </button>
                                            <input id="project-name" type="text" placeholder="Enter project" required>
                                        </form>
                                        <ul id='projects-list'>
                                        </ul>
                                    </div>
                                </div>
                            `
    }

    __createContentSection(){

        const content = document.getElementsByClassName("content-container")[0]
        content.innerHTML=`
        <div class="subcontainer">
                    
            <div class="todo-items">

                <div id="project--name-container">
                    <div id="project--name">Project Name</div>
                    <button type="click"> <i class='bx bx-x'></i> </button>
                </div>
            </div>
            
            <div class="todos-add-button">
                <button type="button" id="add-todo">
                    <i  class='bx bx-list-plus bx-sm'></i>
                </button>
            </div>

        </div>
        `
        
    }

    __createFormPopup(){
        const content = document.getElementById("content")
        content.innerHTML+=`
        <div class='popup--form' id='todo--form'>
            <form action='#' id="todo-form">
                <div class='data'>
                    <input type="text" placeholder='Todo Title...' name="title" required>
                </div>
                <div class='data'>
                    <textarea name="description" id="todo-description-form" cols="45" rows="10" placeholder='Description...' required></textarea>
                </div>
                <div class='data'>
                    <label>Priority: </label>
                    <input type="radio" name='priority' value='high' checked>High
                    <input type="radio" name='priority' value='medium'>Medium
                    <input type="radio" name='priority' value='low'>Low
                </div>
                <div class='data'>
                    <label>Due Date: </label>
                    <input  type="date" name="duedate" required>
                </div>
                <div class='form--buttons'>
                    <div id='submit-btn'>
                        <button type='submit'>Create Todo</button>
                    </div>
                    <div id='cancel-btn'>
                        <button type='button'>Cancel</button>
                    </div>
                </div>
            </form>
            </div>
        `
    }

    __addListeners(){
        const cancelBtn =  document.getElementById('cancel-btn');

        cancelBtn.addEventListener("click", ()=>{
            document.getElementById("todo--form").style.display="none";
        })
    
        
        const addButton =  document.getElementById('add-todo')
        addButton.addEventListener("click", ()=>{
            document.getElementById("todo--form").style.display="block";
        })


        document.querySelector(".side-bar #btn").addEventListener("click", ()=>{
            document.querySelector(".side-bar").classList.toggle("active");
            document.querySelector(".projects").classList.toggle("active");
            document.querySelector(".content-container").classList.toggle("active");
        });
    }

    createProjectBinder(){
        const addProject = document.getElementById('submit-project-form');

        addProject.addEventListener("submit", (e)=>{
            e.preventDefault();
            const project = document.getElementById("project-name"); 
            const projectsList = document.getElementById("projects-list");
            const newProject =  document.createElement("li");
            
            newProject.innerText=project.value;
            projectsList.append(newProject);
            project.value="";

        });
    }

    createTodoBinder(createTodoHandler){
        let form = document.querySelector("#todo-form");
        form.addEventListener("submit",(e)=>{
            
            e.preventDefault();
            const data = new FormData(e.target);

            const formDataObj = {};
            data.forEach((value, key) => (formDataObj[key] = value));
            console.log(formDataObj)
            document.getElementById("todo--form").style.display="none";

            
            form.reset();
            Model.saveTodos(new Todo(formDataObj.title, formDataObj.description, formDataObj.duedate,formDataObj.priority));
            this.renderTodos();
        });
    }
}


{/* <div class="todo--item">
<div id="control-buttons">
    <button type="submit">
        <i class='bx bx-edit-alt'></i>
    </button>
    <input type="checkbox">
</div>
<div id="todo-content">
    <div id="todo-main">
        <div id="todo-title">Title</div>
        <div id="todo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quod impedit sunt, a voluptatem placeat reprehenderit totam nihil, voluptates blanditiis est, in suscipit! Voluptatum beatae quis ad deserunt voluptatibus unde.</div>
    </div>
    <div id="todo-meta">
        <div id="todo-due-date">Due Date</div>
        <div id="todo-priority">Priority</div>
    </div>    
</div>
</div> */}