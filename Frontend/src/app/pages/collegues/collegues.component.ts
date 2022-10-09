import { Component, OnInit } from '@angular/core';
import {Employee} from "../../shared/model/employee.model";
import {Rating} from "../../shared/model/rating/rating";

@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.css']
})
export class ColleguesComponent implements OnInit {
  employees = [
    new Employee({
      id: 2,
      name: 'Ivan Petrov',
      tasks: [],
      ratings: [
        new Rating({
        id: 3,
        score: 3,
          rated_id:3
      }),
        new Rating({
          id: 4,
          score: 4,
          rated_id: 2
        })]
    }),
    new Employee({
      id: 3,
      name: 'Petr Ivanov',
      tasks: [],
      ratings: [
        new Rating({
          id: 2,
          score: 5,
          rated_id: 3
        }),
        new Rating({
          id: 4,
          score: 4,
          rated_id: 3
        })
      ]
    })
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
