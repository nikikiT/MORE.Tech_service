import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HelperUtilService} from "./helper-util.service";
import {Observable} from "rxjs";
import {EmployeeTask} from "../model/task/employee-task.model";

@Injectable({
  providedIn: 'root'
})
export class RatingApiService {

  constructor(private http: HttpClient, private helper: HelperUtilService) { }

  getTasks(employeeId:number): Observable<EmployeeTask[]>{
    let url = ''
   return  this.http.get<EmployeeTask[]>(this.helper.base_url+url)
  }
}
