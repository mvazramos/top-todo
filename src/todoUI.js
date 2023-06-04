export default class todoUI{

    constructor(){
        this.__createNavSection()
        this.__createContentSection()
    }

    __createNavSection(){
        const content = document.getElementsByClassName("side-bar")[0]
        content.innerHTML=`
                                <div class="logo-details">
                                    <i class="bx bx-menu" id="btn"></i>
                                </div>
                                <div class="projects">
                                    <div id="project-tab">Projects</div>
                                    <ul id="projects-list">
                                    </ul>
                                    <div id="project-input">
                                        <button type="submit" id="btn-submit">
                                            <i class='bx bx-folder-plus bx-sm'></i>
                                        </button>
                                        <input id="project-name" type="text" placeholder="Enter project">
                                    </div>
                                </div>
                            `
    }

    __createContentSection(){

        const content = document.getElementsByClassName("content-container")[0]
        content.innerHTML=`
            <div class="todos-add-button">
            <button type="submit" id="add-todo">
                <i  class='bx bx-list-plus bx-sm'></i>
            </button>
            </div>
            
            <div class="todo-items">

                <div id="project--name-container">
                    <div id="project--name">Project Name</div>
                </div>

                <div class="todo--item">
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
                </div>

            </div>
        `
        
    }

    createTodo(title, description, deadline, priority){

        return `
        <div class="todo--item">
                    <div id="control-buttons">
                        <button type="submit">
                            <i class='bx bx-edit-alt'></i>
                        </button>
                        <input type="checkbox">
                    </div>
                    <div id="todo-content">
                        <div id="todo-main">
                            <div id="todo-title">${title}</div>
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

}