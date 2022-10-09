import {EmployeeTask} from "./task/employee-task.model";
import {Rating} from "./rating/rating";

interface IEmployee {
    id: number;
    name: string;
    tasks: EmployeeTask[],
    ratings: Rating[]
}

export class Employee {
    id: number;
    name: string;
    tasks: EmployeeTask[];
    ratings: Rating[];
    constructor(emp?: IEmployee) {
        this.id = emp && emp.id || -1;
        this.name = emp && emp.name ||'';
        this.ratings = emp?.ratings || []
        this.tasks =  emp?.tasks || []
    }
}
