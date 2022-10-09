import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Employee} from "../model/employee.model";



@Injectable()
export class HelperUtilService {

public  base_url = ''

  private appData: any;

  employee: Employee = new Employee();

  constructor(private http: HttpClient) {
    // this.getAppData().subscribe(a => {
    //   this.appData = a;
    //   this.employee = a.employee;
    // })
  }


  getAppData(): Observable<any> {
    if (this.appData)
      return of(this.appData)
    let url = '';
    return this.http.get(this.base_url + url)
  }

  getTasksByIds():Observable<Task[]>{
    let url = '';
    return this.http.get<Task[]>(this.base_url + url);
  }

}

