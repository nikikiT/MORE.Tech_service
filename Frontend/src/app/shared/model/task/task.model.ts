
interface ITask {
    id?: number;
    lvl_id?:number;
    type?: string;
    cost?: number;
    max?: number;

}

export class Task {
  id?: number;
  lvl_id: number;
  type: string;
  cost: number;
  max: number;
    constructor(task?: ITask) {
        this.id = task && task.id || -1;
        this.type = task && task.type || '';
        this.cost = task && task.cost || -1;
        this.lvl_id = task && task.lvl_id || -1;
        this.max = task && task.max || -1;
    }


}
