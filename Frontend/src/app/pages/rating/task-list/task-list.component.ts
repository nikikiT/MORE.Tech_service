import {Component, Input, OnInit} from '@angular/core';
import {EmployeeTask} from "../../../shared/model/task/employee-task.model";
import {Task} from "../../../shared/model/task/task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

@Input()
 public tasks  :EmployeeTask[]
  =
  [
    new EmployeeTask({
      id:1,
      fact: 2,
      task: new Task({
        lvl_id:1,
        max: 5,
        type: 'CONFERENCE'
      })
    }),
    new EmployeeTask({
      id:2,
      fact: 4,
      task:  new Task({
        lvl_id:1,
        max: 5,
        type: 'COURSE'
      })
    })
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
