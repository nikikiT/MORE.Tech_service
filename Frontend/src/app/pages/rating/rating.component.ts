import {Component, Input, OnInit} from '@angular/core';
import {HelperUtilService} from "../../shared/services/helper-util.service";
import {Employee} from "../../shared/model/employee.model";
import {EmployeeTask} from "../../shared/model/task/employee-task.model";
import {Task} from "../../shared/model/task/task.model";
import {RatingApiService} from "../../shared/services/rating-api.service";


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private helper: HelperUtilService, private ratingService: RatingApiService) { }


  public tasks:EmployeeTask[] = [
      new EmployeeTask({
        id: 1,
        fact: 2,
        task: new Task({
          lvl_id: 1,
          max: 5,
          type: 'CONFERENCE'
        })
      }),
      new EmployeeTask({
        id:2,
        fact: 2,
        task:  new Task({
          lvl_id:1,
          max: 5,
          type: 'COURSE'
        })
      })
    ]


  ngOnInit(): void {

    // this.ratingService.getTasks(this.userId).subscribe(tasks=>this.tasks=tasks)
  }

}
