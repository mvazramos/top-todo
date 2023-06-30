export default class Todo{
    constructor(title, description, dueDate, priority){
        this.uuid=NaN; 
        this.status=false;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority; 

        this.project=NaN;
    }
}
