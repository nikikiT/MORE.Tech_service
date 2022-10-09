import {Component, Input, OnInit} from '@angular/core';
import {EmployeeTask} from "../../../shared/model/task/employee-task.model";
import {HelperUtilService} from "../../../shared/services/helper-util.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  employeeTask: EmployeeTask = new EmployeeTask();

  constructor(private helper: HelperUtilService) {

  }

  ngOnInit(): void {

  }

  getTitleTask():string {

    if (!this.employeeTask.task) return ''
    console.log(this.employeeTask.task.type)
    switch (this.employeeTask.task.type) {
      case 'COURSE': return `Записаться на ${this.employeeTask.task.max} курсов`;
      case 'CONFERENCE': return `Посетить  ${this.employeeTask.task.max} конференций`;
    }
    return ''
  }
}
