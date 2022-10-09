import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../../../shared/model/employee.model";
import {Rating} from "../../../shared/model/rating/rating";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input()
  employee: Employee = new Employee()

  average: number = 0
  disabled = false;

  score:number = 0;
  constructor() { }

  ngOnInit(): void {
    let sum = 0;
    this.employee.ratings.forEach(r=>sum+=r.score )
    this.average = sum/this.employee.ratings.length
  }

  onRatingChanged($event: any) {
    this.employee.ratings.push(new Rating({
      id:1,
      rated_id:this.employee.id,
      score:$event
    }))
    let sum = 0;
    this.employee.ratings.forEach(r=>sum+=r.score )
    this.average = sum/this.employee.ratings.length
    this.disabled=true;

    this.score = $event
  }

  getStarsByAverage() :number{
    if (this.average>4.5) return 100;
    if (this.average>4.3) return 70;
    if (this.average>4) return 50;
    return 30
  }
}
