import {Task} from "./task.model";

interface IEmployeeTask {
    id?: number;
    task_id?:number;
    fact?: number;
    type?: string;
    cost?: number;
  task?: Task;
}

export class EmployeeTask {
  id: number;
  factCompleted: number;
  type: string;
  task_id: number;
  cost: number;
  task: Task;
    constructor(task?: IEmployeeTask) {
        this.id = task && task.id || -1;
        this.factCompleted = task && task.fact || 0;
        this.type = task && task.type || '';
        this.cost = task && task.cost || -1;
        this.task_id = task && task.task_id || -1;
        this.task = task && task.task ||new Task()
    }
}
